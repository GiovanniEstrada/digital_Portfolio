import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="bubble">
        <h1 className="place">Universidad de San Carlos de Guatemala</h1>
        <p className="studies">
          Ingenieria en Ciencias y Sistemas (Tercer Año)
        </p>
      </div>

      <div className="bubble">
        <h1 className="place">Colegio Vanguardia Juvenil</h1>
        <p className="studies">
          Bachillerato en Ciencias y Letras Orientado a computacion
        </p>
      </div>
    </div>
  );
};

export default About;
