export const InputComponent = ({
  name,
  type,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
