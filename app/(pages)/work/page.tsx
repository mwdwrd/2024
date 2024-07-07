"use client";

import { useEffect, useMemo, useState } from "react";
import Projects from "../(components)/projects";
import projects from "@/data/projects.json";
import s from "./page.module.scss";
import Filters from "./(components)/filters";

const WorkIndex = (): JSX.Element => {
  const [categories, setCategories] = useState<{ [category: string]: number }>({});
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    const counts = projects.reduce<{ [category: string]: number }>((acc, project) => {
      project.categories.forEach((cat) => {
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
  }, []);

  const filteredProjects = useMemo(() => {
    return active === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(active));
  }, [active]);

  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Work</h2>
      </div>
      <div className={s.filters}>
        <Filters categories={categories} active={active} onCategoryChange={(category) => setActive(category)} />
      </div>
      <div className={s.projects}>
        <Projects projects={filteredProjects} />
      </div>
    </>
  );
};

export default WorkIndex;