import React from 'react'
import z4 from "../images/z4.jpg"
import z17 from "../images/z17.jpg"
import z18 from "../images/z18.jpg"
import z6 from "../images/z6.jpg"
import z13 from "../images/z13.jpg"
import z14 from "../images/z14.jpg"
import amilanesa from "../images/amilanesa.jpg"
import abebida from "../images/abebida.jpg"
import apedido from "../images/apedido.jpg"
import años25 from "../images/años25.jpg"
import "../index.css"
import Footerr from "./Footerr"

export default function Home() {
    
    return (
        <div>

            <br/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={z17} className="d-block w-100" alt="z17"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={z4}  className="d-block w-100" alt="z4"/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={z18}  className="d-block w-100" alt="z18"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            
            <section>

<h1 className='p-5 frase'><span className='text-danger'>25 años</span> sirviendo al prójimo con bienes de mejor calidad a un menor precio.</h1>

            </section>
            
            <section >
                <img className="w-100 " src={z6} alt="z6"/>
                <img className="w-100 pt-1" src={z13} alt="z13"/>
                <img className="w-100 pt-1 pb-5" src={z14} alt="z14"/>
            </section>

           <section className='container-fluid '>
           <div className="row" >
               <div className='col  d-flex justify-content-center'>
                      <img  src={amilanesa} alt="milanesa"/></div>
                          <div>
                              <h3 className=' d-flex justify-content-center text-danger pt-1 h3iconos'>COMIDAS</h3>
                              <p className=' d-flex justify-content-center pb-3 piconos'>Los mejores sandwichs de milanesas y empanadas, las encontrás acá.</p>
                          </div>
                          
                          
                          </div>

                          <div className="row" >
               <div className='col d-flex justify-content-center'>
                      <img  src={abebida} alt="milanesa"/></div>
                          <div>
                              <h3 className=' d-flex justify-content-center text-success h3iconos '>BEBIDAS</h3>
                              <p className=' d-flex justify-content-center pb-3 piconos'>Gaseosas, leches, yogures, jugos, cervezas, vinos y muchas otras más.</p>
                          </div>
                          
                          </div>

                          <div className="row" >
               <div className='col d-flex justify-content-center'>
                      <img  src={apedido} alt="milanesa"/></div>
                          <div>
                              <h3 className=' d-flex justify-content-center text-primary h3iconos'>ENVIOS A PEDIDO</h3>
                              <p className=' d-flex justify-content-center pb-5 piconos'>Si vivis en San Martin, podés hacer tu pedido y te lo llevamos hasta tu casa.</p>
                          </div>
                          
                          </div>
                
           </section>

           <section className="image-background" style={{ backgroundImage: ` linear-gradient(rgba(5, 7, 12, 0.75), rgba(5,7,12,0.75)),url(${años25} )` }}>
<article ><p className="letra-image-background">25 AÑOS EN EL BARRIO</p></article>

           </section>
   
           <Footerr/>

                    </div>
    )
}
