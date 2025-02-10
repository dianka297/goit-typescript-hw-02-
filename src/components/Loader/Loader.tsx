import { Oval} from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader:  React.FC = () => {
  return (
    <div className={css.container}>
    <Oval
    height={80}
    width={80}
    color="rgb(88, 125, 228)"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    visible={true}
    />
    </div> 
  );
};

export default Loader;