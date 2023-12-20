import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Stars() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <Rating onClick={handleRating} initialValue={rating} />
      <p>(430743084734093 😎 avis)</p>
    </>
  );
}

export default Stars;
