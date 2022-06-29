import React, { useEffect } from 'react'
import './about.css'
import AboutImg from '../../assets/About.jpg'

const About = () => {

  useEffect(()=>{
    idioma();
  },[])

  function idioma() {
    const btnEsp = document.getElementById('esp');
    const btnEng = document.getElementById('eng');
    const español = document.querySelector('.text-esp');
    const ingles = document.querySelector('.text-eng');
    console.log(español.classList[2])

    btnEsp.addEventListener('click', ()=>{
      if(español.classList.length === 3){
      console.log('Activo');
      return;
      } else {
        btnEsp.classList.add('active');
        btnEng.classList.remove('active');
        español.classList.add('active');
        ingles.classList.remove('active');
        return;
      }
    });

    btnEng.addEventListener('click', ()=>{
      if(ingles.classList.length === 3){
      console.log('Activo');
      return;
      } else {
        btnEng.classList.add('active');
        btnEsp.classList.remove('active');
        ingles.classList.add('active');
        español.classList.remove('active');
        return;
      }
    });
  }

  return (
    <>
      <div className='about-main'>
        <div className='img'>
          <img className='about-img' src={AboutImg} alt="about"></img>
        </div>
        <div className='text'>
          <div className='traslate'>
            <button  className='btn-t active' id='esp'>Español</button>
            <button className='btn-t ' id='eng'>English</button>
          </div>
          <h5>About Me:</h5>
          <p className='about-text text-eng '>
            Giovanni Estrada is a junior web developer
            and a third year system engineering student.
            During his studies he has been able to relate
            to the different technologies that are currently
            the most used in the labor market, in addition
            to creating projects which have been training
            him to be able to solve programming problems.
          </p>
          <p className='about-text text-esp active'>
            Giovanni Estrada es un desarrollador web junior y un estudiante
            de 3er año en ingenieria en ciencias y sistemas. Durante sus 
            estudios ha podido relacionarse con las distintas
            tecnologias que actualmente son las mas utilizadas en 
            el mundo laboral, ademas que ha elaborado proyectos que lo 
            han ayudado a ser capaz de resolver problemas con la logica de programacion.
          </p>
        </div>
      </div>
    </>
  )
}

export default About