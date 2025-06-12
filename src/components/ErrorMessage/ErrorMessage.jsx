import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <>
      <p className={s.error_message}>{error}</p>
      <p className={s.error_message}>Please try again later</p>
    </>
  );
};

export default ErrorMessage;
