"use client"

import React, { useEffect, useState } from 'react';
import projects from '@/data/projects.json';
import s from './project.module.scss';
import clsx from 'clsx';
import Header from './(components)/header';
import VideoPlayer from '@/components/VideoPlayer';

const Project = ({ params: { slug } }: { params: { slug: string } }): JSX.Element => {
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    setProject(projects.find(p => p.slug === slug) || null);
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <div className={s.wrapper}>

      <div className={s.row}>
        <div className={clsx(s.col, s.video)}>
          <VideoPlayer
            src={"google-cts"}
            format="widescreen"
            autoplay={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>

      <Header {...project} />

    </div>
  );
};

export default Project;


