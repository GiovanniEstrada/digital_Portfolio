import React from "react";
import "./projects.css";
import proj1 from "../../assets/netflix-1.PNG";
import proj2 from "../../assets/challenge-1.PNG";
import proj3 from "../../assets/challenge-2.PNG";

function Projects({ title, url, description, git, frameworks, project }) {
  console.log(url);
  return (
    <>
      <div className="container-project">
        <div className="logo">
          <img
            alt="img"
            className="img-project"
            src={
              project == "netflix"
                ? proj1
                : project == "challenge1"
                ? proj2
                : project == "challenge2"
                ? proj3
                : ""
            }
          ></img>
          <div className="info">
            <h1 className="project-title">{title}</h1>
            <p className="project-desc">{description}</p>
            <br />
            <a href={url} className="url">
              Visitar la Pagina
            </a>
            <a href={git} className="url">
              Codigo Fuente
            </a>
          </div>
        </div>
        <div className="project-frameworks">
          {frameworks.map((data) => (
            <div className="project-framework">{data}</div>
          ))}
        </div>
      </div>
      {/* <div className='base'>
        <div className='pictures'>
          <img alt='img' className='img-project' src={Net1} />
          <img alt='img' className='img-project' src={Net2} />
          <img alt='img' className='img-project' src={Net3} />
        </div>
        <h3 className='desc'>
        <div className='subtitle'>Descripción :</div>
        Este proyecto consta en tratar de replicar la pagina oficial de NETFLIX
        con el fin de plasmar los conocimientos de HTML, CSS y Javascript adquiridos.
        Ademas de consumir la API que NETFLIX nos proporciona y adaptarla a el entorno
        creado.
        <div className='subtitle'>Framework :</div>
        Esta pagina fue realizada con el Framework de <div className='bold'>React</div>, con el cual nos
        pudimos apoyar para realizar componentes reutilizables los cuales
        nos servirian para poder imprimir las peliculas en pantalla
        </h3>
      </div> */}
    </>
  );
}

export default Projects;
