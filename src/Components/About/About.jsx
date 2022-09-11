import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <p className="about-text">
          Giovanni Estrada es un desarrollador web junior y un estudiante de 3er
          año en ingenieria en ciencias y sistemas. Durante sus estudios ha
          podido relacionarse con las distintas tecnologias que actualmente son
          las mas utilizadas en el mundo laboral, ademas que ha elaborado
          proyectos que lo han ayudado a ser capaz de resolver problemas con la
          logica de programacion.
        </p>
      </div>
      <div className="college">
        <h1 className="place">Universidad de San Carlos de Guatemala</h1>
        <p className="studies">Ingenieria en Ciencias y Sistemas</p>
        <h1 className="place">Colegio Vanguardia Juvenil</h1>
        <p className="studies">
          Bachillerato en Ciencias y Letras Orientado a computacion
        </p>
      </div>
    </div>
  );
};

export default About;
