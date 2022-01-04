import React from 'react'
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import insta from "../images/insta.png"

export default function Footerr() {
    return (
        <div>
                    <footer className='bg-primary d-flex justify-content-around footerHome'>

<div className="align-self-center" >
<section><p className='text-light'>Todos los derechos reservados (C) 2022</p></section>
</div>

<div >
<div> <h4 className='ps-5 text-light'>Seguinos en: </h4> </div>
<ul className="sociales">
	<li> <a href="https://www.facebook.com/"> <img src={facebook} alt="facebook" width="45" height="45"/></a></li>
	<li> <a href="https://www.twitter.com/"> <img src={twitter} alt="twitter" width="45" height="45"/></a></li>
	<li> <a href="https://www.instagram.com/"> <img src={youtube} alt="youtube" width="45" height="45"/></a></li>
	<li> <a href="https://www.youtube.com/"> <img src={insta} alt="insta" width="45" height="45"/></a></li>
</ul>

</div>




           </footer>
        </div>
    )
}
