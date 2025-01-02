"use client";

import { useEffect, useMemo, useState } from "react";
import workData from "@/data/work.json";
import s from "./page.module.scss";
import Filters from "./(components)/filters";
import Tile from "@/components/Tile";

const WorkIndex = (): JSX.Element => {
  const [categories, setCategories] = useState<{ [category: string]: number }>({});
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    const counts = workData.reduce<{ [category: string]: number }>((acc, project) => {
      project.categories.forEach((cat) => {
        if (!acc[cat]) {
          acc[cat] = 1;
        } else {
          acc[cat] += 1;
        }
      });
      return acc;
    }, {});
  
    const categoriesWithAll = { 'All': workData.length, ...counts };
  
    setCategories(categoriesWithAll);
  }, []);

  const filteredProjects = useMemo(() => {
    return active === "All"
      ? workData
      : workData.filter((tile) => tile.categories.includes(active));
  }, [active]);

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-row gap-6 p-6 border-t border-b">
        <div className="flex flex-1">
          <h2 className={s.heading}>Work</h2>
        </div>
        <div className="flex flex-1">
          <Filters categories={categories} active={active} onCategoryChange={(category) => setActive(category)} />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className={s.projects}>
          {filteredProjects.map((work, i) => (
            <Tile
              key={i}
              index={i + 1}
              title={work.title}
              url={`/work/${work.slug}`}
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
};

export default WorkIndex;