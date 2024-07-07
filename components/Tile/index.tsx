"use client";

import { useRouter } from "next/navigation";
import s from "./Tile.module.scss";
import { motion } from "framer-motion";
import Thumb from "../Thumb";
import clsx from "clsx";

interface TileProps extends ITile {
  index: number;
  format: "cinema" | "widescreen" | "standard" | "photo" | "square";
  client?: string;
  categories?: string[];
}

const Tile = ({
  index,
  format = "standard",
  title,
  url,
  thumb = {
    type: "image",
    src: "",
  },
  client = "",
  categories = [],
}: TileProps): JSX.Element => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      <div className={s.project}>
        <div className={s.content}>
          <h3 className={s.client}>{client}</h3>
          <h2 className={s.title}>{title}</h2>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          <div className={clsx(s.image, s[format])} onClick={() => router.push(url)}>
            <Thumb type={thumb.type} src={thumb.src} alt={title} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tile;
