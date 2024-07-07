import s from "./Block.module.scss";
import clsx from "clsx";

interface BlockProps {
  children: React.ReactNode;
  first?: boolean;
  last?: boolean;
  fullsize?: boolean;
}

const Block = ({
  children,
  first = false,
  last = false,
  fullsize = false,
}: BlockProps) => {
  return (
    <div
      className={clsx(s.wrapper, {
        [s.first]: first,
        [s.last]: last,
        [s.fullsize]: fullsize,
      })}
    >
      {children}
    </div>
  );
};

export default Block;
