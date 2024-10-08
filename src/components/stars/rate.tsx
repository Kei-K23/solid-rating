import { Accessor, createEffect, createSignal, Match, Switch } from "solid-js";
import HalfStarSvg from "./half-star-svg";
import StarSvg from "./star-svg";

interface RateProps {
  hoverRating: Accessor<number>;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  index: number;
  halfFillMode?: boolean;
  size?: number;
  color?: string;
  activeColor?: string;
  readOnly?: boolean;
}

export default function Rate(props: RateProps) {
  const [filled, setFilled] = createSignal(false);
  const [halfFilled, setHalfFilled] = createSignal(false);

  const starSize = props.size || 24;
  const starColor = props.color || "#e4e5e9";
  const activeStarColor = props.activeColor || "#ffc107";

  createEffect(() => {
    // Change and update the rating when hovering
    props.hoverRating() > props.index ? setFilled(true) : setFilled(false);

    // Handling half star
    if (props.halfFillMode) {
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
          <StarSvg
            filled={filled()}
            starColor={starColor}
            activeStarColor={activeStarColor}
          />
        </Match>
        <Match when={halfFilled()}>
          <HalfStarSvg
            starColor={starColor}
            activeStarColor={activeStarColor}
          />
        </Match>
      </Switch>
    </div>
  );
}
