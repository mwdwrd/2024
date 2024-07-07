import Projects from "../(components)/projects";
import projects from "@/data/projects.json"; 
import s from "./page.module.scss";

const WorkIndex = (): JSX.Element => {
  return (
    <>
      <div className={s.projects}>
        <Projects projects={projects} />
      </div>
    </>
  );
}

export default WorkIndex;