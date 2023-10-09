import React from 'react';
/* import { Link} from 'react-router-dom'; */
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';


import './styles/Home.css';

import gpsIcon from "../assets/icons/GPS-icon.svg"
import googleMapsIcon from "../assets/icons/googleMaps.svg"
import wazeIcon from "../assets/icons/waze-icon.svg"




const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/sliderHome1-optimizado.png',
    },
  ];
  


const Home = () => {
  return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

          <div className='hero-space' id="hero-space">
            <section className='hero-slider'>

              <Slider dataSlider={dataHero} panelInfo='heroHome' />

            </section>
          </div>

          <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/separadorPass.png" alt="separador-pass" className='separador-pass' id='about'/>


          <section className='articuloPass-space'>
            <article className='articuloPass'>
              <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome1.png" alt="fotoHome1" className='fotoHome1' />

              <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome2.png" alt="fotoHome2" className='fotoHome2' />

              <div className='articuloSpace1'>
                <div className='articuloText'>
                  <h2>¿Quienes somos?</h2>  
                  <p>
                    En <b>Gasolineras Pass</b>, somos mucho más 
                    que una simple gasolinera: somos un socio <b>confiable</b> en tus viajes y un componente 
                    esencial de tu <b>experiencia</b> en carretera en <b>Guatemala</b>.
                  </p>

                  <p>
                    Con una profunda conexión 
                    con nuestra comunidad y un compromiso 
                    firme con la calidad, estamos aquí para 
                    brindarte <b>combustible premium</b> que no solo 
                    alimenta tus vehículos, sino también tus <b>aventuras</b>.
                  </p>
                </div>
              </div>
            </article>
          </section>

          <section className='articuloPass-space'>
            <article className='articuloPass'>
          
              <div className='articuloSpace2'>
                <div className='articuloText'>
                  <h2>Misión</h2>  
                  <p>
                    Nuestra misión es ser el <b>proveedor</b> de combustible y servicios de <b>primera elección</b> para 
                    conductores y viajeros en toda <b>Guatemala</b>. Nos comprometemos a ofrecer <b>combustibles</b> 
                    de la más <b>alta calidad</b> y servicios excepcionales que <b>optimicen el rendimiento</b> de los 
                    vehículos y mejoren la <b>experiencia</b> en carretera.
                  </p>
                </div>
              </div>

              <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome3.png" alt="fotoHome3" className='fotoHome3' />
            </article>
          </section>


          <section className='articuloPass-space'>
            <article className='articuloPass'>
            
              <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome4.png" alt="fotoHome4" className='fotoHome4' />
          
              <div className='articuloSpace3'>
                <div className='articuloText'>
                  <h2>Visión</h2>  
                  <p>
                    Nuestra visión es ser la <b>gasolinera líder</b> y reconocida a nivel nacional en <b>Guatemala</b>, 
                    reconocida por la <b>calidad superior</b> de nuestros productos, la <b>innovación</b> en servicios y 
                    la integridad en nuestras operaciones.
                  </p>

                  <p>
                    Buscamos establecer un estándar de <b>excelencia</b> en la industria, siendo un referente en prácticas 
                    de sostenibilidad <b>ambiental</b> y <b>social</b>.
                  </p>
                </div>
              </div>
              
            </article>
          </section>

          <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/separadorPass.png" alt="separador-pass" className='separador-pass' id='estaciones'/>

          <section className='ubicaciones-section'>
            
            <a href="https://www.google.com/maps/search/Pass+fuel/@14.851027,-91.6473214,9z?entry=ttu" target='__blank' className='overlay-ubicaciones' >

              <div className='text-container'>
                <img src={gpsIcon} alt="gps-icon" />

                <h1>Encuentra tu <span className='span-ubi'>estacion</span></h1>

                <p>
                  Selecciona tu <span className='span-ubi'>ubicación</span> y filtra tu <span className='span-ubi'>Estación de Servicio</span> más cercana
                  de acuerdo a tus necesidades.
                </p>
              </div>

              <div className='maps-icons'>
                <img src={googleMapsIcon} alt="google-maps-icon" />
                <img src={wazeIcon} alt="waze-icon" />
              </div>

            </a>
          </section>  


          <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/separadorPass.png" alt="separador-pass" className='separador-pass' />

          
          <section className='articuloPass-space2'>
            <article className='articuloPass2'>

            <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome5.png" alt="fotoHome5" className='fotoHome5' />

            <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/fotoHome6.png" alt="fotoHome6" className='fotoHome6' /> 


            <div className='articuloSpace3'>
              <div className='articuloText3'>
                
                <h2>Calidad</h2>  
                <p>
                  Entre nuestros <b>valores</b> tenemos como prioridad la transparencia y la honestidad, contamos con una excelente atención al cliente.
                  Contamos con la mejor higiene y limpieza que puedas imaginar cumpliendo las normativas.
                </p>
                
              </div>
            </div>


            <div className='articuloSpace4'>
              <div className='articuloText4'>
                <h2>Seguridad</h2>  
                <p>
                  Al respecto de nuestra <b>seguridad</b> contamos con cámaras de vigilancia a todo momento que son 
                  monitoreados a tiempo real  y contamos con personal capacitado para actuar en casos de <b>emergencia</b>.
                </p>
              </div>
            </div>
            
            </article>
          </section>


          <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/separadorPass.png" alt="separador-pass" className='separador-pass' id='promocion'/>

          <section className='promocion-container'>
            <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/lubricante-promociones.png" alt="lubricante-promociones" className='lubricante-promociones' />
            
            <div className='text-promociones' >
              
              <article>
                <h2>Aceite Pass</h2>

                <p>
                  Descubre el secreto
                  para un rendimiento
                  excepcional de tu motor!
                </p>
              </article>
              

              <a href="http://" target="_blank"><span>ver más</span></a>
            </div>

          </section>

          <section className='comentarios-section'>
            <div className='comentarios-space'>
              <h2>Comentarios</h2>

              <div className='div-comentarios'>
                <aside className='comentario1'>
                  <article className='comentario-box'>
                    <article className='comentario-article'>
                      <p>
                        Me pareció una estación muy limpia
                        segura y ordenada en todos los aspectos,
                        también los trabajadores fueron muy 
                        amables al ofrecerme ayuda en chequear mi
                        aceite y calibrar mis llantas.
                      </p>
                    </article>

                    <header className='perfil-comentario'>
                      <div className='perfil-img'>
                        <img src="https://s3.amazonaws.com/tango.store/empleos/empleoPerfil.png" alt="comentario-profile" />
                      </div>

                      <div className='perfil-name'>
                        <h5>Andres Tobar</h5>
                        <p>08/2023</p>
                      </div>
                    </header>
                  </article>
                </aside>

                <aside className='comentario2'>
                  <article className='comentario-box'>
                    <article className='comentario-article'>
                      <p>
                        Me pareció una estación muy limpia
                        segura y ordenada en todos los aspectos,
                        también los trabajadores fueron muy 
                        amables al ofrecerme ayuda en chequear mi
                        aceite y calibrar mis llantas.
                      </p>
                    </article>

                    <header className='perfil-comentario'>
                      <div className='perfil-img'>
                        <img src="https://s3.amazonaws.com/tango.store/empleos/empleoPerfil.png" alt="comentario-profile" />
                      </div>

                      <div className='perfil-name'>
                        <h5>Andres Tobar</h5>
                        <p>08/2023</p>
                      </div>
                    </header>
                  </article>
                </aside>

                <aside className='comentario3'>
                  <article className='comentario-box'>
                    <article className='comentario-article'>
                      <p>
                        Me pareció una estación muy limpia
                        segura y ordenada en todos los aspectos,
                        también los trabajadores fueron muy 
                        amables al ofrecerme ayuda en chequear mi
                        aceite y calibrar mis llantas.
                      </p>
                    </article>

                    <header className='perfil-comentario'>
                      <div className='perfil-img'>
                        <img src="https://s3.amazonaws.com/tango.store/empleos/empleoPerfil.png" alt="comentario-profile" />
                      </div>

                      <div className='perfil-name'>
                        <h5>Andres Tobar</h5>
                        <p>08/2023</p>
                      </div>
                    </header>
                  </article>
                </aside>
              </div>
            </div>
          </section>


          <section className='servicios-section'  id='servicios'>
            <h1>Servicios que ofrecemos</h1>

            <div className='services-icons'>

              <div className='icon-item'>
                <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/servicios-icon1.png" alt="disponible 24/7" />
                <h3>Abierto 24 h</h3>
              </div>

              <div className='icon-item'>
                <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/servicios-icon2.png" alt="revision-aceite" />
                <h3>Revisión de aceite</h3>
              </div>
              <div className='icon-item'>
                <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/servicios-icon3.png" alt="limpia-parabrisas" />
                <h3>Limpia parabrisas</h3>
              </div>
              <div className='icon-item'>
                <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/servicios-icon4.png" alt="calibracion-llantas" />
                <h3>Calibración de llantas</h3>
              </div>
 
            </div>
          </section>

          <footer className='footerHome'>
            <Footer />
          </footer>


        </main>
    </>

  );
};

export default Home;