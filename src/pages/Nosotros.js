import React from 'react'
import frente from "../images/frente.jpg"
import Footerr from './Footerr'

export default function Nosotros() {
    
  



    return (
        <div >

  <h1 className=' d-flex justify-content-center pt-4 pb-2 fuentesol'>Almacén el Sol</h1>

           <p className='d-flex p-4 '>Somos una empresa familiar que desde 1996 decidió realizar un emprendimiento en el barrio de San Martin, 
    trabajando en todo momento para brindar un buen servicio a los vecinos. Poco a poco, trabajando de lunes a lunes, 
    nos fuimos haciendo conocidos, y hoy en dia después de 25 años forjamos un negocio de referencia en el barrio, querido y 
    respetado por la gente. Son famosos nuestros exquisitos sandwichs de milanesas y nuestras deliciosas empanadas. Si estas 
    en San Martin, no te pierdas la oportunidad y veni a visitarnos. Con gusto te atenderemos.</p>

<div  className='d-flex justify-content-center img-fluid '>
<img src={frente} alt="frente"  className='img-fluid p-4'/>

</div>



            <div className='d-flex justify-content-center align-items-center p-4'  >
	 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0391327124494!2d-58.55196418468876!3d-
     34.57787636363847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77c92631511%3A0xab7f5f68d13e88ea!2sAv.
     %20Pres.%20Juan%20Domingo%20Per%C3%B3n%204562%2C%20B1650%20Villa%20Lynch%2C%20Provincia%20de%20Buenos%20Aires!5e0
     !3m2!1ses-419!2sar!4v1613852989037!5m2!1ses-419!2sar"  width="800" height="500" alt="hola"  ></iframe> </div>

<div className='p-4'></div>
<Footerr/>

        </div>
 
        
    )
}
