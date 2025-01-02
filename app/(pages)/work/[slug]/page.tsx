"use client";

import React, { useEffect, useState } from "react";
import { getProject } from "@/lib/projects";
import AssetModule from "./(components)/asset-module";
import { motion } from "framer-motion";
import WorkHeader from "./(components)/work-header";
import type { IProject, Asset } from '@/index.d';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params: { slug } }: ProjectPageProps) {
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getProject(slug);
      setProject(projectData);
    };
    fetchProject();
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "anticipate", duration: 0.75 }}
      >
        <WorkHeader project={project} />
      </motion.div>

      {project.modules.map((module: Asset[], i: number) => (
        <AssetModule key={i} data={module} />
      ))}
    </>
  );
}
