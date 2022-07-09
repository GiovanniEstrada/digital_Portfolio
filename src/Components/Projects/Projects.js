import React from 'react'
import './projects.css'
import Net1 from '../../assets/netflix-1.PNG'
import Net2 from '../../assets/netflix-2.PNG'
import Net3 from '../../assets/netflix-3.PNG'

function Projects({ titulo, url, description }) {

  console.log(url)
  return (
    <>
      <div className='base'>
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
      </div>
    </>
  )
}

export default Projects