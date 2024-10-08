import { createSignal, Show, Index } from "solid-js";
import RatingContainer from "./rating-container";
import Star from "./rate";

interface StarRatingProps {
  maxRating?: number;
  initialRating?: number;
  size?: number;
  color?: string;
  activeColor?: string;
  halfFillMode?: boolean;
  readOnly?: boolean;
  onChange?: (rating: number) => void;
  onClick?: (rating: number) => void;
}

export default function Rating(props: StarRatingProps) {
  const [hoverRating, setHoverRating] = createSignal(props.initialRating || 0);

  const handleMouseMove = (index: number, event: MouseEvent) => {
    if (props.readOnly) return;

    const starWidth = (event.currentTarget as HTMLElement).offsetWidth;

    const mouseX =
      event.clientX -
      (event.currentTarget as HTMLElement).getBoundingClientRect().left;

    const halfStarWidth = starWidth / 2;

    if (props.halfFillMode) {
      setHoverRating(mouseX < halfStarWidth ? index + 0.5 : index + 1);
    } else {
      setHoverRating(index + 1);
    }

    props.onChange?.(hoverRating());
  };

  const handleMouseLeave = () => {
    if (props.readOnly) return;
  };

  const handleOnClick = () => {
    if (props.readOnly) return;
    props.onClick?.(hoverRating());
  };

  return (
    <RatingContainer>
      <Index each={Array(props.maxRating || 5).fill(0)}>
        {(_, index) => {
          return (
            <Star
              index={index}
              hoverRating={hoverRating}
              halfFillMode={props.halfFillMode}
              onMouseMove={(event) => handleMouseMove(index, event)}
              onMouseLeave={handleMouseLeave}
              onClick={handleOnClick}
              size={props.size}
              color={props.color}
              activeColor={props.activeColor}
              readOnly={props.readOnly}
            />
          );
        }}
      </Index>
      <Show when={!props.readOnly}>
        <span style={{ "margin-left": "10px" }}>{hoverRating()}</span>
      </Show>
    </RatingContainer>
  );
}
