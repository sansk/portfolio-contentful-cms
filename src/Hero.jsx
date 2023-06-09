import HeroSVG from "./assets/hero.svg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentfull CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            beatae voluptas, saepe amet minima quas voluptates deleniti dolores
            quaerat doloribus vel explicabo ex vero nihil accusantium aut atque
            consectetur! Sapiente.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroSVG} alt="Browser" className="img" />
        </div>
      </div>
    </section>
  );
};
