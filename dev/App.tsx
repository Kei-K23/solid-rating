import { createEffect, createSignal } from "solid-js";
import Rating from "src";
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
      <h1>Solid Rating</h1>
      <Rating
        maxRating={5}
        initialRating={3}
        size={60}
        color="#e4e5e9"
        activeColor="#Afc107"
        halfFillMode={true}
        readOnly={false}
        onChange={setValue}
        onClick={setClickValue}
      />
    </div>
  );
}

export default App;
