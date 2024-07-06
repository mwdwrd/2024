import s from './footer.module.scss';
import clsx from 'clsx';

const Footer = (): JSX.Element => {
  return (
    <div className={s.wrapper}>

      <div className={clsx(s.row, s.top)}>
        <div className={s.col}>
          hi@ocean.studio<br />
          Hälsobrunnsgatan 10<br />
          SE—113 61 Stockholm
        </div>
        <div className={s.col}>
          <div className={s.row}>
            <div className={s.col}>
              Instagram<br />
              Twitter<br />
              LinkedIn
            </div>
            <div className={s.col}>
              Col 3
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