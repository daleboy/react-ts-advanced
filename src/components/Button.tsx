import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
}

export default Button;
