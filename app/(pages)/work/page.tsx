import Projects from "../(components)/projects";
import projects from "@/data/projects.json"; 

const WorkIndex = (): JSX.Element => {
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}

export default WorkIndex;