import StarRating from "src";
function App() {
  const handleRatingChange = (newRating: number) => {
    console.log(`New rating: ${newRating}`);
  };

  return (
    <div>
      <h1>Product Rating</h1>
      <StarRating
        maxRating={5}
        initialRating={3}
        onChange={handleRatingChange}
        size={32}
        color="#e4e5e9"
        activeColor="#ffc107"
        // halfStars={true}
        // customIcon="path/to/custom-icon.svg"
        // readOnly={true}
      />
    </div>
  );
}

export default App;
