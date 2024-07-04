import styles from "./page.module.scss";
import ProjectTile from "@/components/ProjectTile";
import projects from "@/data/projects.json"

const Home = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.coverVideo}>
          {/* <video autoPlay loop muted className={styles.video}>
            <source src="/seg1.mp4" type="video/mp4" />
            <source src="/seg1.webm" type="video/webm" />
          </video> */}
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projects</h2>
        </div>
        <div className={styles.projects}>
          {projects.map((project, i) => (
            <ProjectTile key={i} index={i + 1} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
