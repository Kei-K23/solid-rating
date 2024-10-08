import { Show } from "solid-js";

interface StarProps {
  filled: boolean;
  halfFilled: boolean;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  size?: number;
  color?: string;
  readOnly?: boolean;
  activeColor?: string;
  customIcon?: string;
}

export default function Star(props: StarProps) {
  const starSize = props.size || 24;
  const starColor = props.color || "#e4e5e9";
  const starActiveColor = props.activeColor || "#ffc107";

  return (
    <div
      style={{
        width: `${starSize}px`,
        height: `${starSize}px`,
        position: "relative",
        cursor: props.readOnly ? "default" : "pointer",
      }}
    >
      <Show
        when={props.customIcon}
        fallback={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={props.filled ? starActiveColor : starColor}
            stroke={props.filled ? starActiveColor : starColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        }
      >
        <img
          src={props.customIcon}
          alt="custom star icon"
          style={{ widows: "100%", height: "100%" }}
        />
      </Show>
      <Show when={props.halfFilled}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={starActiveColor}
            stroke={starActiveColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ width: `${starSize * 2}px`, height: `${starSize}px` }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </Show>
    </div>
  );
}
