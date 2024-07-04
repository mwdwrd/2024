"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./ProjectTile.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectTileProps extends IProject {
  index: number;
}

const ProjectTile = (project: ProjectTileProps): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const indexWithPadding = project.index.toString().padStart(2, "0");
  const router = useRouter();
  const imageUrl = "/" + project.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      <div
        className={styles.project}
        onClick={() => router.push(`/work/${project.slug}`)}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>
            {project.client}
            <br />
            {project.title}
          </h2>
          <p className={styles.cats}>{project.categories.join(", ")}</p>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          <div className={styles.image}>
            {project.image && (
              <Image src={imageUrl} alt={project.title} fill={true} />
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;
