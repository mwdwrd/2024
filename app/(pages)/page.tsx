import styles from "./page.module.scss";
import projects from "@/data/projects.json"
import Projects from "./(components)/projects";

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
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Home;
