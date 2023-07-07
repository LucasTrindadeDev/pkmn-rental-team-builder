import { Dispatch, SetStateAction } from "react";

export default function TextInput({
  classes,
  name,
  defaultValue,
  setFunction,
}: {
  classes: string;
  name: string;
  defaultValue: string | number;
  setFunction: Dispatch<SetStateAction<any>>;
}) {
  return (
    <input
      className={classes}
      name={name}
      defaultValue={defaultValue}
      onChange={(e) => setFunction(e.target.value)}
    />
  );
}
