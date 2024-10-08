import {
  Accessor,
  createEffect,
  createSignal,
  Match,
  Show,
  Switch,
} from "solid-js";
import HalfStarSvg from "./half-star-svg";
import StarSvg from "./star-svg";

interface StarProps {
  hoverRating: Accessor<number>;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  index: number;
  halfStars?: boolean;
  size?: number;
  color?: string;
  activeColor?: string;
  customIcon?: string;
  readOnly?: boolean;
}

export default function Star(props: StarProps) {
  const [filled, setFilled] = createSignal(false);
  const [halfFilled, setHalfFilled] = createSignal(false);

  const starSize = props.size || 24;
  const starColor = props.color || "#e4e5e9";
  const activeStarColor = props.activeColor || "#ffc107";

  createEffect(() => {
    // Change and update the rating when hovering
    props.hoverRating() > props.index ? setFilled(true) : setFilled(false);

    // Handling half star
    if (props.halfStars) {
      props.hoverRating() - props.index === 0.5
        ? setHalfFilled(true)
        : setHalfFilled(false);
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
      <Switch>
        <Match when={!halfFilled()}>
          <Show
            when={props.customIcon}
            fallback={
              <StarSvg
                filled={filled()}
                starColor={starColor}
                activeStarColor={activeStarColor}
              />
            }
          >
            <img
              src={props.customIcon}
              alt="Custom star icon"
              style={{ width: "100%", height: "100%" }}
            />
          </Show>
        </Match>
        <Match when={halfFilled()}>
          <Show
            when={props.customIcon}
            fallback={
              <HalfStarSvg
                starColor={starColor}
                activeStarColor={activeStarColor}
              />
            }
          >
            <img
              src={props.customIcon}
              alt="Custom star icon"
              style={{ width: "100%", height: "100%" }}
            />
          </Show>
        </Match>
      </Switch>
    </div>
  );
}
