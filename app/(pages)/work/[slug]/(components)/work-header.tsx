"use client";

import { Fragment, useEffect, useState } from "react";
import type { IProject } from "@/index.d";
import { SVGIcon } from "@/components/svg-icons";
import { useTheme } from "next-themes";

interface WorkHeaderProps {
  project: IProject;
}

export default function WorkHeader({ project }: WorkHeaderProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const color = mounted ? (resolvedTheme === "dark" ? "white" : "black") : "black";

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-6 mb-12">

      <div className="flex flex-1 w-full border-t gap-6 p-6">
        <div className="flex flex-1">
          {project.logo && <SVGIcon type={project.logo.type} color={color} size={project.logo.size * 2} />}
        </div>
        <div className="flex flex-1">
          <div className="font-mono text-xs uppercase">{project.title}</div>
        </div>
      </div>

      <div className="flex flex-1 w-full">
        <div className="pt-[180px] px-4 pb-8 border-b border-border">
          <h2 
            className="font-sans text-[180px] leading-[0.8] font-semibold tracking-tighter" 
            dangerouslySetInnerHTML={{ __html: project.headline ?? '' }} 
          />
        </div>
      </div>

      <div className="flex flex-1 w-full gap-6 p-6 items-start">
        <div className="flex flex-1 items-center">
          {project.categories.map((category, i) => (
            <Fragment key={category}>
              <span className="font-mono text-xs uppercase">{category}</span>
              {i < project.categories.length - 1 && (
                <span className="inline-block mx-1">/</span>
              )}
            </Fragment>
          ))}
        </div>
        <div className="flex flex-1">
          <div className="prose prose-xl tracking-tight leading-snug text-foreground/90" dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      </div>

    </div>
  );
};
