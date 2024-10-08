import { JSX } from "solid-js";

interface StarContainerProps {
  children: JSX.Element;
}
export default function StarContainer({ children }: StarContainerProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        "align-items": "center",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}
