import { createEffect, createSignal } from "solid-js";
import Rating from "src";
import "src/style.css";

function App() {
  const [value, setValue] = createSignal(0);
  const [clickValue, setClickValue] = createSignal(0);

  createEffect(() => {
    console.log(value());
  });
  createEffect(() => {
    console.log(clickValue(), "onClick");
  });

  return (
    <div>
      <h1
        style={{
          "text-align": "center",
          "margin-top": "50px",
        }}
      >
        Solid Rating
      </h1>
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <Rating
          maxRating={5}
          initialRating={3}
          size={100}
          color="#e4e5e9"
          activeColor="#Afc107"
          halfFillMode
          onChange={setValue}
          onClick={setClickValue}
        />
      </div>
    </div>
  );
}

export default App;
