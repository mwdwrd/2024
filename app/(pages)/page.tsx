import styles from "./page.module.scss";
import projects from "@/data/projects.json"
import Projects from "./(components)/projects";
import VideoPlayer from "@/components/VideoPlayer";

const Home = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.coverVideo}>
          {/* <VideoPlayer
            src={{
              mp4: "/seg1.mp4",
              webm: "/seg1.webm",
            }}
            format="widescreen"
            autoplay={true}
            clickable={false}
            muted={true}
            loop={true}
          /> */}
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work</h2>
        </div>
        <div className={styles.projects}>
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Home;
