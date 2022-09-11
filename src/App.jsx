import React, { Suspense, lazy, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// Import with Lazy

const Header = lazy(() => import("./Components/Header/Header"));
const About = lazy(() => import("./Components/About/About"));
const Background = lazy(() => import("./Components/Background/Background"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

//img

const App = () => {
  return (
    <>
      <Navbar />
      <Background />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<h1>Wait for it</h1>}>
              <Header />
            </Suspense>
          }
        ></Route>
        <Route
          exact
          path="/skills"
          element={
            <Suspense fallback={<h1>Wait for it</h1>}>
              <Skills />
            </Suspense>
          }
        ></Route>
        <Route
          exact
          path="/projects"
          element={
            <Suspense fallback={<h1>Wait for it</h1>}>
              <div className="projects-container">
                <Projects
                  title="Rock, Paper, Scissors game"
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
                  title="TODO app using Angular"
                  description="Con esta pagina podras ingresar una tarea y esta la 
                  ingresara a las tareas por hacer. Una vez realizada la tarea se 
                  podra marcar como tarea terminada o bien se puede eliminar con un 
                  boton. Ademas de poseer un filtro para poder ver las tareas completadas y 
                  las incompletas. Otro atributo es la capacidad de poner la app en modo 
                  nocturno y que podras organizar a tu antojo el orden de tus tareas"
                  project="challenge6"
                  url="https://keen-pudding-8e9950.netlify.app/"
                  git="https://github.com/GiovanniEstrada/frontend-challenge-6-"
                  frameworks={["Angular", "Typescript", "CSS", "HTML"]}
                />
                <Projects
                  title="IP Address Tracker"
                  description="Hoy en dia al estar conectados a internet, encontrar tu localizacion con tu ip 
          es mas sencillo. Esta pagina web nos permite geolocalizar cualquier 
          ip registrada de forma global. El proyecto se realiza con la finalidad 
          de demostrar el manejo de una API la cual nos brinda la localizacion segun latitud 
          y longitud y una herramienta de Javascript la cual nos genera el mapa"
                  project="challenge3"
                  url="https://creative-lolly-ea2ee4.netlify.app/"
                  git="https://github.com/GiovanniEstrada/FrontEnd-Challenge-3-"
                  frameworks={[
                    "Javascript",
                    "LeafletJS",
                    "ipfy",
                    "CSS",
                    "HTML",
                  ]}
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
                <Projects
                  title="Interactive rating component"
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
                  title="Interactive card details form"
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
                  title="Advice Generator"
                  description="Simple, una pagina que al hacer click en un boton 
                  mandara a llamar a una API la cual te genera una frase y se imprime 
                  en pantalla."
                  project="challenge5"
                  url="https://celadon-beijinho-79085a.netlify.app/"
                  git="https://github.com/GiovanniEstrada/advice-generator-app-main"
                  frameworks={["Javascript", "CSS", "HTML"]}
                />
              </div>
            </Suspense>
          }
        ></Route>
        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={<h1>Wait for it</h1>}>
              <About />
            </Suspense>
          }
        ></Route>
        <Route
          exact
          path="/contact"
          element={
            <Suspense fallback={<h1>Wait for it</h1>}>
              <Contact />
            </Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
