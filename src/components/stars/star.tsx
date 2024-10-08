import { Accessor, createEffect, createSignal, Show } from "solid-js";

interface StarProps {
  hoverRating: Accessor<number>;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  index: number;
  size?: number;
  color?: string;
  activeColor?: string;
  customIcon?: string;
  readOnly?: boolean;
}

export default function Star(props: StarProps) {
  // Using mergeProps to set default values for props
  const [filled, setFilled] = createSignal(false);
  const starSize = props.size || 24;
  const starColor = props.color || "#e4e5e9";
  const activeStarColor = props.activeColor || "#ffc107";

  createEffect(() => {
    if (props.hoverRating() > props.index) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  });

  return (
    <div
      style={{
        width: `${starSize}px`,
        height: `${starSize}px`,
        position: "relative",
        cursor: props.readOnly ? "default" : "pointer",
      }}
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <Show
        when={props.customIcon}
        fallback={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled() ? activeStarColor : starColor}
            stroke={filled() ? activeStarColor : starColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{
              width: `${starSize}px`,
              height: `${starSize}px`,
            }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        }
      >
        <img
          src={props.customIcon}
          alt="Custom star icon"
          style={{ width: "100%", height: "100%" }}
        />
      </Show>
    </div>
  );
}
