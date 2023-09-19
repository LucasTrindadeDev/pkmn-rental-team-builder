export default function TeamTextInput({
  handlerFunction,
  name,
  placeholder,
  defaultValue,
  classes,
  disabled,
}: {
  handlerFunction(param: string): void;
  name: string;
  placeholder: string;
  defaultValue: string;
  classes: string;
  disabled?: boolean
}) {
  return (
    <input
      className={classes}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => handlerFunction(e.target.value)}
      disabled={disabled}
    />
  );
}
