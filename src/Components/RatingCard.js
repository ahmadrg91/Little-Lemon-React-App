import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { isInteger } from "formik";


function RatingCard({rating, ...props}) {
    let i = 0;
    let half = !isInteger(rating);

    if(half)
        rating = Math.floor(rating);

    let stars = [];
    while(i < rating)
        stars[i++] = (<FontAwesomeIcon icon={fas.faStar} className="checked"/>);
        if(half)
            stars.push(<FontAwesomeIcon icon={fas.faStarHalf} className="checked"/>) ;

  return (
    <article className="testimonial-card">
      <h3>
        {stars.map(item => item)}
      </h3>
      <div>
        <img src={props.imageURL} alt=""/>
        <p>
          <b>{props.name}</b>
        </p>
      </div>
      <p>{props.text}</p>
    </article>
  );
}

export default RatingCard;
