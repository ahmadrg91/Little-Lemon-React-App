import Card from "./Card";

const foods = [
  {
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '12.99',
    imageURL: 'images/greek-salad.jpg'
  },
  {
    name: 'Bruchetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '5.99',
    imageURL: 'images/bruchetta.jpg'
  },
  {
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma`s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '5.00',
    imageURL: 'images/lemon-dessert.jpg'
  }
]

function Special() {
  return (
    <section id="specials-section">
      <div>
        <h1 style={{color: "black",}}>This week's Specials!</h1>
        <button className="call-to-action">Online Menu</button>
      </div>
      <div>
        {foods.map((item) => <Card name={item.name} description={item.description} price={item.price} imageURL={item.imageURL}/>)}
      </div>
    </section>
  );
}

export default Special;
