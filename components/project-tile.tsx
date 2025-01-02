"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Thumb from "@/components/Thumb";
import clsx from "clsx";
import { SVGIcon } from "@/components/svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { PROTECTED_PROJECTS } from "@/lib/protected-projects";

interface ProjectTileProps {
  index: number;
  title: string;
  url: string;
  logo?: {
    type: string;
    size: number;
  };
  thumb: {
    type: string;
    src: string | string[];
  };
  format?: "cinema" | "widescreen" | "standard" | "photo" | "square";
  client?: string;
  categories?: string[];
}

const ProjectTile = ({
  index,
  format = "standard",
  title,
  url,
  logo,
  thumb = {
    type: "image",
    src: "",
  },
  client = "",
  categories = [],
}: ProjectTileProps): JSX.Element | null => {
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const slug = url.split('/').pop();
  const isProtected = slug && PROTECTED_PROJECTS.includes(slug);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const color = mounted ? (resolvedTheme === "dark" ? "white" : "black") : "black";

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: "anticipate", duration: 0.75 }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          {logo && <SVGIcon type={logo?.type} color={color} size={logo?.size} />}
          <div className="flex items-center gap-2">
            <h2 className="font-mono text-xs">{title}</h2>
            {isProtected && (
              <Lock className="w-3 h-3 text-foreground/60" />
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
        >
          <div 
            className="relative cursor-pointer border rounded-lg overflow-hidden"
            onClick={() => router.push(url)}
          >
            <Thumb type={thumb.type} src={thumb.src} alt={title} format={format} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;