"use client";

import React, { useEffect, useState } from "react";
import workData from "@/data/work.json";
import s from "./project.module.scss";
import clsx from "clsx";
import Block from "@/components/Block";
import AssetModule from "./(components)/AssetModule";
import { motion } from "framer-motion";

const Project = ({
  params: { slug },
}: {
  params: { slug: string };
}): JSX.Element => {
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    setProject(workData.find((p) => p.slug === slug) || null);
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Block first>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          <div className={clsx(s.headerBlock)}>
            <div className={clsx(s.row, s.eyebrow)}>
              <div className={s.col}>{project.client}</div>
              <div className={s.col}>{project.title}</div>
            </div>
            <h2 className={s.heading}>{project.headline}</h2>
            <div className={s.description}>
              <div
                className={s.paragraph}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
            {/* <div className={s.categories}>
            {project.categories.map((category, i) => (
              <React.Fragment key={category}>
                <span className={s.category}>{category}</span>
                {i < project.categories.length - 1 && (
                  <span className={s.divider}> / </span>
                )}
              </React.Fragment>
            ))}
          </div> */}
          </div>
        </motion.div>
      </Block>

      <Block last>
        <div className={s.assets}>
          {project.modules.map((module, i) => (
            <AssetModule key={i} data={module} />
          ))}
        </div>
      </Block>
    </>
  );
};

export default Project;
