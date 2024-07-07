"use client";

import { useEffect, useMemo, useState } from "react";
import projectData from "@/data/projects.json";
import s from "./page.module.scss";

const WorkIndex = (): JSX.Element => {
  return (
    <>
      <div className={s.header}>
        <h2 className={s.title}>Projects</h2>
      </div>
      <div className={s.projects}>
        Projects
      </div>
    </>
  );
};

export default WorkIndex;