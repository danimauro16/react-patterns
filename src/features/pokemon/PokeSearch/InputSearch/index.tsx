import React from "react";
import { BasicInput } from "./BasicInput";
import { SpecialInput } from "./SpecialInput";

interface InputSearchProps {
  children: React.ReactNode | React.ReactNode[];
}
export const InputSearch = ({ children }: InputSearchProps) => {
  return <div className="flex flex-col items-center gap-6">{children}</div>;
};

export default Object.assign(InputSearch, {
  BasicInput,
  SpecialInput
});
