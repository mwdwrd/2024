"use client";

import { useEffect, useMemo, useState } from "react";
import { getProjectList } from "@/lib/projects";
import Filters from "./(components)/filters";
import ProjectTile from "@/components/project-tile";
import type { IProject } from '@/index.d';

export default function WorkIndex() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [categories, setCategories] = useState<{ [category: string]: number }>({});
  const [active, setActive] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectList = await getProjectList();
        setProjects(projectList);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const counts = projects.reduce<{ [category: string]: number }>((acc, project: IProject) => {
      project.categories.forEach((cat: string) => {
        if (!acc[cat]) {
          acc[cat] = 1;
        } else {
          acc[cat] += 1;
        }
      });
      return acc;
    }, {});
  
    const categoriesWithAll = { 'All': projects.length, ...counts };
    setCategories(categoriesWithAll);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return active === "All"
      ? projects
      : projects.filter((project: IProject) => project.categories.includes(active));
  }, [active, projects]);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-row gap-6 p-6 border-t border-b">
        <div className="flex flex-1">
          <h2 className="font-sans text-xl leading-none"></h2>
        </div>
        <div className="flex flex-1">
          <Filters categories={categories} active={active} onCategoryChange={(category) => setActive(category)} />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-6">
        <div className="grid grid-cols-2 gap-6">
          {filteredProjects.map((work, i) => (
            <ProjectTile
              key={i}
              index={i + 1}
              title={work.title}
              url={`/work/${work.slug}`}
              logo={work.logo}
              thumb={work.thumb}
              format="widescreen"
              client={work.client}
              categories={work.categories}
            />
          ))}
        </div>
      </div>
  
    </div>
  );
}