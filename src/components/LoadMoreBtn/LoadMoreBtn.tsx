import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;