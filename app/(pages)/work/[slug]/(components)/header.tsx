import clsx from 'clsx';
import s from './header.module.scss';

interface HeaderProps {
  client: string;
  title: string;
  description: string;
}

const Header = ({ client, title, description }: HeaderProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={clsx(s.col, s.sm)} />
        <div className={clsx(s.col, s.titleBlock)}>
          <h2 className={s.heading}>{title}</h2>
        </div>
      </div>
      <div className={s.row}>
        <div className={clsx(s.col, s.sm)}>About the Project</div>
        <div className={clsx(s.col)}>
          <div className={s.desc} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
