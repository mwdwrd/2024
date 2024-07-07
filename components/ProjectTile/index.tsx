"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./ProjectTile.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverThumb from "../HoverThumb";

interface ProjectTileProps extends IProject {
  index: number;
}

const ProjectTile = (project: ProjectTileProps): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const indexWithPadding = project.index.toString().padStart(2, "0");
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      <div
        className={styles.project}
      >
        <div className={styles.content}>
          <h3 className={styles.client}>{project.client}</h3>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.cats}>{project.categories.join(", ")}</p>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          <div className={styles.image} onClick={() => router.push(`/work/${project.slug}`)}>
            {project.thumb &&
              <>
                {project.thumb.type === "image" &&
                  <Image src={project.thumb.src} alt={project.title} fill={true} />
                }
                {project.thumb.type === "video" &&
                  <HoverThumb src={project.thumb.src} />
                }
              </>
            }
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;
