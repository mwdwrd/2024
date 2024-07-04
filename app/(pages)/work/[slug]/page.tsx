"use client"

import React, { useEffect, useState } from 'react';
import projects from '@/data/projects.json';

const Project = ({ params: { slug } }: { params: { slug: string } }): JSX.Element => {
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    setProject(projects.find(p => p.slug === slug) || null);
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1>{project.client}</h1>
      <h1>{project.title}</h1>
    </div>
  );
};

export default Project;
