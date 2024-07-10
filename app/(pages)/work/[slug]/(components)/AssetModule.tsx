import Image from "next/image";
import s from "./assetModule.module.scss";
import clsx from "clsx";
import VideoPlayer from "@/components/VideoPlayer";
import Thumb from "@/components/Thumb";
import { motion } from "framer-motion";

interface AssetModulesProps {
  data: Asset[];
}

const AssetRenderer = ({ asset }: { asset: Asset }) => {
  const { type, src, alt, format } = asset;

  switch (type) {
    case "video":
      return (
        <div className={clsx(s.asset, s[format])}>
          <VideoPlayer
            src={{ mp4: src.mp4, webm: src.webm }}
            format={format}
            controls="hover"
            autoplay={true}
            clickable={true}
            muted={true}
            loop={true}
          />
        </div>
      );
    case "image":
      return (
        <div className={clsx(s.asset, s[format])}>
          <Image src={src} alt={alt} fill={true} />
        </div>
      );
    default:
      return <Thumb format="square" type="none" src="" alt="hello" />;
  }
};

const AssetModule = ({ data }: AssetModulesProps) => {
  return (
    <div className={clsx(s.row)}>
      {data.map((asset, index) => (
        <div key={index} className={clsx(s.col)}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "anticipate", duration: 0.75 }}
          >
            <AssetRenderer asset={asset} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AssetModule;

{
  /* <VideoPlayer
            src={{
              mp4: "https://ofmkdsqxwtmohuvy.public.blob.vercel-storage.com/google-cts-EGkhL5mdOAkri29fwvdfdtRii8oZyd.mp4",
            }}
            format="widescreen"
            controls="hover"
            autoplay={true}
            clickable={true}
            muted={true}
            loop={true}
          /> */
}
