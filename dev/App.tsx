import { createEffect, createSignal } from "solid-js";
import StarRating from "src";
function App() {
  const [value, setValue] = createSignal(0);

  createEffect(() => {
    console.log(value());
  });

  return (
    <div>
      <h1>Product Rating</h1>
      <StarRating
        maxRating={5}
        initialRating={3}
        onChange={setValue}
        size={60}
        color="#e4e5e9"
        activeColor="#ffc107"
        halfStars={true}
        // customIcon="path/to/custom-icon.svg"
        // readOnly={true}
      />
    </div>
  );
}

export default App;
