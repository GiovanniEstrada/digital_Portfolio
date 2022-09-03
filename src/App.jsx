import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Frameworks from "./Components/Frameworks/Frameworks";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="flex-main">
      <div className="div header">
        <Header></Header>
      </div>
      <div className="div about">
        <About />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111111"
          fill-opacity="1"
          d="M0,96L30,101.3C60,107,120,117,180,112C240,107,300,85,360,112C420,139,480,213,540,229.3C600,245,660,203,720,202.7C780,203,840,245,900,234.7C960,224,1020,160,1080,138.7C1140,117,1200,139,1260,154.7C1320,171,1380,181,1410,186.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <h3 className="section-title-skills">
        <h2 className="S">S</h2>kills
      </h3>
      <div className="div frameworks">
        <Frameworks />
      </div>
      <div className="div projects">
        <h3 className="section-title-project">
          <h2 className="S">P</h2>rojects
        </h3>
        <Projects
          title="Frontend Mentor | Rock, Paper, Scissors game"
          description='Con el objetivo de mejorar las habilidades de ReactJS, 
          decidí crear esta pagina web en la cual podrás jugar al clasico juego "Piedra, 
          Papel o Tijera". La interaccion con la pagina es intuitiva, seleccionamos uno de los 
          tres items para jugar, luego la pagina hara un versus en el cual se decidira quien ganará y perdera.
           Otro de los objetivos del uso de React es relacionarse mas con los Hooks que el framework 
           nos brinda'
          project="challenge4"
          url="https://stirring-ganache-b2cb3f.netlify.app/"
          git="https://github.com/GiovanniEstrada/frontend-challenge-4-"
          frameworks={["ReactJS", "Javascript", "CSS", "HTML"]}
        />
        <Projects
          title="Frontend Mentor | IP Address Tracker"
          description="Hoy en dia al estar conectados a internet, encontrar tu localizacion con tu ip 
          es mas sencillo. Esta pagina web nos permite geolocalizar cualquier 
          ip registrada de forma global. El proyecto se realiza con la finalidad 
          de demostrar el manejo de una API la cual nos brinda la localizacion segun latitud 
          y longitud y una herramienta de Javascript la cual nos genera el mapa"
          project="challenge3"
          url="https://creative-lolly-ea2ee4.netlify.app/"
          git="https://github.com/GiovanniEstrada/FrontEnd-Challenge-3-"
          frameworks={["Javascript", "LeafletJS", "ipfy", "CSS", "HTML"]}
        />
        <Projects
          title="Frontend Mentor | Interactive rating component"
          description="Este es un proyecto inicial de la plataforma Frontend Mentor 
          es una pequeña pagina en la cual puedes calificar de la escala de 1 a 5 y poder enviar 
          tu calificación para finalmente recibir una pantalla de agradecimiento. El proyecto 
          sirve para mostrar el manejo de css y javascript para poder desarrollar pequeñas tareas."
          project="challenge1"
          url="https://imaginative-kringle-a2052e.netlify.app/"
          git="https://github.com/GiovanniEstrada/FrontEnd-Challenge-1-.git"
          frameworks={["Javascript", "CSS", "HTML"]}
        />
        <Projects
          title="Frontend Mentor | Interactive card details form"
          description="Esta pagina te genera una tarjeta con los datos que vas ingresando 
          en el formulario, todo esto lo va llenando a la vez que lo vas escribiendo,
           ademas que valida los datos y te notifica si algun dato es erroneo. Este proyecto me ayudo 
           a tener un mejor conocimiento sobre el manejo del DOM con javascript y como 
           hacer una interaccion a tiempo real en la pagina."
          project="challenge2"
          url="https://jazzy-youtiao-ab3405.netlify.app/"
          git="https://github.com/GiovanniEstrada/FrontEnd-Challenge-2-.git"
          frameworks={["Javascript", "CSS", "HTML"]}
        />
        <Projects
          title="NETFLIX Clone"
          description="Este proyecto consta en tratar de replicar la pagina oficial de NETFLIX
        con el fin de plasmar los conocimientos de HTML, CSS y Javascript adquiridos.
        Ademas de consumir la API que NETFLIX nos proporciona y adaptarla a el entorno
        creado."
          project="netflix"
          url="https://friendly-stroopwafel-621186.netlify.app/"
          git="https://github.com/GiovanniEstrada/netflix.git"
          frameworks={["React", "Javascript", "CSS", "HTML"]}
        />
      </div>
      <div className="div contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
