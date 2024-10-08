import { Accessor, createEffect, createSignal, Match, Switch } from "solid-js";
import HalfStarSvg from "./half-star-svg";
import StarSvg from "./star-svg";

interface RateProps {
  index: number;
  halfFillMode?: boolean;
  size?: number;
  color?: string;
  activeColor?: string;
  readOnly?: boolean;
  isDisabled?: boolean;
  hoverRating: Accessor<number>;
  onMouseMove: (event: MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function Rate(props: RateProps) {
  const [filled, setFilled] = createSignal(false);
  const [halfFilled, setHalfFilled] = createSignal(false);

  const ratingItemSize = props.size || 24;
  const ratingItemColor = props.color || "#e4e5e9";
  const ratingActiveItemColor = props.activeColor || "#ffc107";

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
        width: `${ratingItemSize}px`,
        height: `${ratingItemSize}px`,
        position: "relative",
        cursor: props.readOnly ? "default" : "pointer",
      }}
      class={`${props.isDisabled && "disabled-div"}`}
      onMouseMove={props.onMouseMove}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      tabIndex={props.readOnly || props.isDisabled ? -1 : 0}
      aria-label={`Rate ${props.index + 1} stars`}
    >
      <Switch>
        <Match when={!halfFilled()}>
          <StarSvg
            filled={filled()}
            ratingItemColor={ratingItemColor}
            ratingActiveItemColor={ratingActiveItemColor}
          />
        </Match>
        <Match when={halfFilled()}>
          <HalfStarSvg
            ratingItemColor={ratingItemColor}
            ratingActiveItemColor={ratingActiveItemColor}
          />
        </Match>
      </Switch>
    </div>
  );
}
