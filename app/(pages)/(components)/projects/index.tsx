import ProjectTile from "@/components/ProjectTile";
import s from "./projects.module.scss";

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <div className={s.projects}>
      {projects.map((project, i) => (
        <ProjectTile key={i} index={i + 1} {...project} />
      ))}
    </div>
  );
}

export default Projects;