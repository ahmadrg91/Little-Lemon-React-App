import { useEffect, useRef, useState } from "react";
import RatingCard from "./RatingCard";

function Testimonials() {
  const reviews = [
    {
      name: "Williams",
      rating: "5",
      text: '"Little Lemon is just perfect"',
      imageURL: "https://i.pravatar.cc/65?img=49",
    },
    {
      name: "Jordan",
      rating: "4",
      text: '"The Greek Salad was Amazing"',
      imageURL: "https://i.pravatar.cc/65?img=18",
    },
    {
      name: "Akash",
      rating: "4.6",
      text: '"Most popular Restaurant of our Region. I will always recommoned it"',
      imageURL: "https://i.pravatar.cc/65?img=17",
    },
    {
        name: "David",
        rating: "4.3",
        text: '"Little Lemon is just perfect"',
        imageURL: "https://i.pravatar.cc/65?img=20",
    },
  ];

  return (
    <section id="testimonials-section">
        <h1>Testimonials</h1>
        <div>
            {reviews.map((item) => (
            <RatingCard
                name={item.name}
                rating={item.rating}
                text={item.text}
                imageURL={item.imageURL}
            />
            ))}
        </div>
    </section>
  );
}

export default Testimonials;
