import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div>
        <div className="title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem
          aliquam itaque est numquam doloremque maiores iure rem temporibus
          ullam vero? Sequi aspernatur sapiente corrupti, consequuntur ullam
          eius laboriosam porro sunt magni
        </p>
        <Link to="reserve-a-table"><button className="call-to-action">Reserve a Table</button></Link>
      </div>
        <img src="images/hero.jpg" alt="Little Lemon Dish"/>
    </section>
  );
}

export default Hero;
