interface HalfStarSvgProps {
  ratingItemColor: string;
  ratingActiveItemColor: string;
}

export default function HalfStarSvg(props: HalfStarSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.ratingItemColor}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={{ transition: "all 0.3s ease" }}
    >
      <defs>
        <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stop-color={props.ratingActiveItemColor} />
          <stop offset="50%" stop-color="transparent" />
        </linearGradient>
        <mask id="halfMask">
          <rect x="0" y="0" width="12" height="24" fill="white" />
        </mask>
      </defs>

      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="url(#halfFill)"
      />

      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke={props.ratingActiveItemColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        mask="url(#halfMask)"
      />
    </svg>
  );
}
