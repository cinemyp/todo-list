import s from "./style.module.css";

const Checkbox = ({ id, onClickComplete, checked }) => {
  const handleChange = (e) => {
    onClickComplete && onClickComplete();
  };
  return (
    <>
      <input
        id={id}
        className={s.checkbox}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id}></label>
    </>
  );
};

export default Checkbox;
