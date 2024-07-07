import s from './footer.module.scss';
import clsx from 'clsx';

const Footer = (): JSX.Element => {
  return (
    <div className={s.wrapper}>

      <div className={clsx(s.row, s.top)}>
        <div className={s.col}>
          hello@tmp.studio<br />
          Brooklyn<br />
          New York 11249
        </div>
        <div className={s.col}>
          <div className={s.row}>
            <div className={s.col}>
              X<br />
              GitHub
            </div>
            <div className={s.col}>
              Links
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(s.row, s.bottom)}>
        <div className={s.col}>
          All Wrongs Reserved 2024
        </div>
        <div className={s.col}>
          Imprint
        </div>
      </div>

    </div>
  );
}

export default Footer;