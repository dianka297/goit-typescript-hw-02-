import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.container}>
      <Circles
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