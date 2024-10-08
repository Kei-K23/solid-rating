import { createSignal, Show, Index } from "solid-js";
import StarContainer from "./star-container";
import Star from "./star";

interface StarRatingProps {
  maxRating?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
  size?: number;
  color?: string;
  activeColor?: string;
  halfStars?: boolean;
  customIcon?: string;
  readOnly?: boolean;
}

export default function StarRating(props: StarRatingProps) {
  const [hoverRating, setHoverRating] = createSignal(props.initialRating || 0);

  const handleMouseMove = (index: number, event: MouseEvent) => {
    if (props.readOnly) return;

    const starWidth = (event.currentTarget as HTMLElement).offsetWidth;

    const mouseX =
      event.clientX -
      (event.currentTarget as HTMLElement).getBoundingClientRect().left;

    const halfStarWidth = starWidth / 2;

    if (props.halfStars) {
      setHoverRating(mouseX < halfStarWidth ? index + 0.5 : index + 1);
    } else {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (props.readOnly) return;
  };

  const handleClick = () => {
    if (props.readOnly) return;
    props.onChange?.(hoverRating());
  };

  return (
    <StarContainer>
      <Index each={Array(props.maxRating || 5).fill(0)}>
        {(_, index) => {
          return (
            <Star
              index={index}
              hoverRating={hoverRating}
              halfStars={props.halfStars}
              onMouseMove={(event) => handleMouseMove(index, event)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              size={props.size}
              color={props.color}
              activeColor={props.activeColor}
              customIcon={props.customIcon}
              readOnly={props.readOnly}
            />
          );
        }}
      </Index>
      <Show when={!props.readOnly}>
        <span style={{ "margin-left": "10px" }}>{hoverRating()}</span>
      </Show>
    </StarContainer>
  );
}
