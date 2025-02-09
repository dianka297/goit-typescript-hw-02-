import { Hearts } from "react-loader-spinner/dist/loader/Hearts";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.container}>
      <Hearts
        height="80"
        width="80"
        color="rgb(88, 125, 228)"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass={css.loading}
        visible={true}
      />
    </div>
  );
};

export default Loader;