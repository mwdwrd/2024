import s from "./page.module.scss";
import workData from "@/data/work.json"
import VideoPlayer from "@/components/VideoPlayer";
import Tile from "@/components/Tile";
import Block from "@/components/Block";

const Home = (): JSX.Element => {
  const projects: IProject[] = workData;

  return (
    <div className="flex flex-col gap-6">

      <Block fullsize>
        <h2 className={s.header}>
          Temporary Studios is the creative studio of Matthew Woodward.
        </h2>
      </Block>

      <Block>
        <div className={s.coverVideo}>
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
      </Block>

      <Block>
        <div>
          <div className={s.header}>
            <h2 className={s.title}>Work</h2>
          </div>
          <div className={s.projects}>
            {projects.map((work, i) => (
              <Tile
                key={i}
                index={i + 1}
                title={work.title}
                url={`/work/${work.slug}`}
                thumb={work.thumb}
                format="widescreen"
              />
            ))}
          </div>
        </div>
      </Block>
  
    </div>
  );
};

export default Home;
