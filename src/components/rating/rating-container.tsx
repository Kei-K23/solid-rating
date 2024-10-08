import { JSX } from "solid-js";

interface RatingContainerProps {
  children: JSX.Element;
}
export default function RatingContainer({ children }: RatingContainerProps) {
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
