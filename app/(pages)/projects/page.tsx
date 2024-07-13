"use client";

import { useEffect, useMemo, useState } from "react";
import projectData from "@/data/projects.json";
import s from "./page.module.scss";
import Block from "@/components/Block";
import Project from "./(components)/project";

const WorkIndex = (): JSX.Element => {
  return (
    <>
      <Block first last>
        <div className={s.projects}>
          {projectData.map((project, i) => {
            return (
              <div className={s.project} key={i}>
                <Project
                  index={i}
                  title={project.title}
                  url={`/work/${project.slug}`}
                  type={project.type}
                  year={project.year}
                  thumb={project.thumb}
                />
              </div>
            );
          })}
        </div>
      </Block>
    </>
  );
};

export default WorkIndex;