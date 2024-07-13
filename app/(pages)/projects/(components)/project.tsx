import s from "./project.module.scss";
import { motion } from "framer-motion";
import clsx from "clsx";
import Thumb from "@/components/Thumb";

interface ProjectProps {
  index: number;
  title: string;
  type: string;
  url: string;
  year: number;
  thumb: {
    type: string;
    src: string;
  };
}

const Project = ({ index, title, type, thumb, url, year = 2024 }: ProjectProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      <div className={s.wrapper}>
        <div className={s.details}>
          <h2 className={s.title}>{title}</h2>
          <div className={s.desc}>
            {year} / {type}
          </div>
        </div>
        {/* <div className={s.image}>
          <Thumb type={thumb.type} src={thumb.src} alt={title} format="widescreen" />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Project;
