import css from "./EmptyResult.module.css";

const EmptyResult: React.FC = () => {
  return <p className={css.text}>We can not find photos 🔎</p>;
};

export default EmptyResult;