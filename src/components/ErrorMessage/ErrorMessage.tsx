import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.container}>
      <p className={css.errorText}>
        Oops! There was an error, please reload this page!
      </p>
    </div>
  );
};

export default ErrorMessage;