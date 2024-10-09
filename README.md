# 🌟 solid-rating 🌟

Highly customizable, easy to use, declarative and zero dependency stars rating component for **Solid**.

## Installation

```bash
pnpm add @smastrom/react-rating
```

```bash
yarn add @smastrom/react-rating
```

```bash
npm i @smastrom/react-rating
```

## Usage

1. Import CSS and Rating component

```ts
// Actual Rating component
import Rating from "src";
// Import global CSS
import "src/style.css";
```

**Importing the CSS only once in the top-level file (most likely main.js or App.jsx) is enough to use Rating component throughout your App.**

2. Use with default value

```tsx
import { createEffect, createSignal } from "solid-js";
import Rating from "src";
import "src/style.css";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <Rating />
      </div>
    </div>
  );
}

export default App;
```

## API

### 🌀 Core

| Prop            | Description                                                             | Type         | Default  | Required                      |
| --------------- | ----------------------------------------------------------------------- | ------------ | -------- | ----------------------------- |
| `maxRating`     | Maximum number of rating items to display.                              | number       | 5        | ❌                            |
| `initialRating` | Initial value for rating items                                          | number       | 0        | ❌                            |
| `size`          | Size of rating item                                                     | number       | 24       | ❌                            |
| `color`         | Color of rating item                                                    | string       | #e4e5e9  | ❌                            |
| `activeColor`   | Color of rating item when they active                                   | string       | #ffc107  | ❌                            |
| `halfFillMode`  | Allow user to point half value                                          | boolean      | false    | ❌                            |
| `isRequired`    | Whether users should be able to set rating to 0 or not.                 | boolean      | false    | ❌                            |
| `isDisabled`    | Whether to disable the radio group or not.                              | boolean      | false    | ❌                            |
| `readOnly`      | Whether to render an accessible image element or not.                   | boolean      | false    | ❌                            |
| `onChange`      | Setter signal or custom function to update the rating.                  | RatingChange | () => {} | Only if readOnly is **false** |
| `onClick`       | Setter signal or custom function to get the current clicked star index. | RatingClick  | () => {} | Only if readOnly is **false** |

## Acknowledgement

This project highly inspired from [@smastrom/react-rating](https://www.npmjs.com/package/@smastrom/react-rating) package.

## Contributions

All contributions are very welcome. You can contributes by adding new features, create demo website in the [dev folder](/dev) and improve documentation.

## LICENSE

This project is under [MIT-LICENSE](/LICENSE)
