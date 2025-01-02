import { Fragment } from "react";
import s from "./Header.module.scss";
import clsx from "clsx";

interface HeaderProps {
  project: IProject;
}

const Header = ({ project }: HeaderProps) => {
  return (
    <div className={clsx(s.wrapper)}>

      <div className={clsx(s.row, s.eyebrow)}>
        <div className={s.col}>
          <div className={s.h3}>{project.client}</div>
        </div>
        <div className={s.col}>
          <div className={s.h3}>{project.title}</div>
        </div>
      </div>

      <div className={clsx(s.row, s.titleBlock)}>
        <div className={s.col}>
          <h2 className={s.h1}>{project.headline}</h2>
        </div>
      </div>

      <div className={clsx(s.row, s.descBlock)}>
        <div className={s.col}>
          {project.categories.map((category, i) => (
            <Fragment key={category}>
              <span className={s.category}>{category}</span>
              {i < project.categories.length - 1 && (
                <span className={s.divider}> / </span>
              )}
            </Fragment>
          ))}
        </div>
        <div className={clsx(s.col, s.description)}>
          <div
            className={s.paragraph}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>

    </div>
  );
};

export default Header;
