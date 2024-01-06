import Card from "./Card";

function Special() {
  return (
    <section id="specials-section">
      <div>
        <h1 style={{color: "black",}}>This week's Specials!</h1>
        <button className="call-to-action">Online Menu</button>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Special;
