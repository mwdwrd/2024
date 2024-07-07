"use client"

import React, { useEffect, useState } from 'react';
import workData from "@/data/work.json"
import s from './project.module.scss';
import clsx from 'clsx';
import Header from './(components)/header';
import VideoPlayer from '@/components/VideoPlayer';

const Project = ({ params: { slug } }: { params: { slug: string } }): JSX.Element => {
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    setProject(workData.find(p => p.slug === slug) || null);
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className={s.wrapper}>

      <Header {...project} />

      <div className={s.row}>
        <div className={clsx(s.col, s.video)}>
          <VideoPlayer
            src={{
              mp4: "https://ofmkdsqxwtmohuvy.public.blob.vercel-storage.com/google-cts-EGkhL5mdOAkri29fwvdfdtRii8oZyd.mp4",
            }}
            format="widescreen"
            controls="hover"
            autoplay={true}
            clickable={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>

      

    </div>
  );
};

export default Project;


