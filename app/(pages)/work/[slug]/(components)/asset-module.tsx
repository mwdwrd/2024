import Image from "next/image";
import clsx from "clsx";
import VideoPlayer from "@/components/VideoPlayer";
import Thumb from "@/components/Thumb";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { aspectRatios } from "@/lib/utils";
import type { Asset } from "@/index.d";

interface AssetModuleProps {
  data: Asset[];
}

const AssetRenderer = ({ asset }: { asset: Asset }) => {
  const { type, src, alt, format } = asset;

  const assetClasses = "rounded-lg overflow-hidden relative w-full h-full flex justify-center items-center";

  switch (type) {
    case "video":
      return (
        <div className={assetClasses}>
          <AspectRatio ratio={aspectRatios[format]}>
            <VideoPlayer
              src={{ mp4: src.mp4, webm: src.webm }}
              format={format}
              controls="hover"
              autoplay={true}
              clickable={true}
              muted={true}
              loop={true}
            />
          </AspectRatio>
        </div>
      );
    case "image":
      return (
        <div className={assetClasses}>
          <AspectRatio ratio={aspectRatios[format]}>
            <Image 
              src={src} 
              alt={alt} 
              fill={true} 
              className="object-cover"
            />
          </AspectRatio>
        </div>
      );
    default:
      return <Thumb format="square" type="none" src="" alt="hello" />;
  }
};

export default function AssetModule({ data }: AssetModuleProps) {
  return (
    <div className="flex justify-between gap-6">
      {data.map((asset, index) => (
        <div key={index} className="flex-1 text-left">
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
}
