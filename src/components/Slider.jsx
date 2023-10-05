import React, { useState, useEffect } from 'react';
import './styles/Slider.scss';







// este componente define el contenido del panel, Slider 1 (Hero del Home Page)
const InfoHeroHome = () => ( 
      <div>

        <h2 className="panel-header"><strong>Guatemala</strong></h2>

        <p className="panel-info">
          !En Gasolineras Pass, estamos orgullosos
          de ser tu elección número uno en gasolina 
          de calidad en toda Guatemala¡
        </p>

        <br />
        <p className="panel-info">contactanos</p>
        <p className="panel-info"><i>info@passfuel.com</i></p>

      </div>
);



const Panel = ({ panelInfo, dataSlider, activeID }) => {

  // Define un estado para los estilos del panel
  const [panelStyle, setPanelStyle] = useState({
    // Define los estilos iniciales del panel aquí
    backgroundColor: '#fff', // Cambia esto según tus necesidades
    right: '0',    
  });

  // Función para cambiar los estilos del panel en función del parámetro
  const updatePanelStyle = () => {
    let styles = {};
    if (panelInfo === 'promotions') {

      styles = {   
        right: '5vw',
        backgroundColor: 'transparent',
        opacity: '1',
        width: '50vw',
      };

      if (window.innerWidth <= 600) {
        styles = {  
          position: 'absolute', 
          right: '-40vw',
          backgroundColor: 'transparent',
          opacity: '1',
          width: '50vw',
        };
      } 


    } else if (panelInfo === 'heroEmpleos2') {

      styles = {
        left: '0',
      };

      if (window.innerWidth <= 600) {
        styles = {
          position: 'relative',
          left: '0',
          marginTop: '5vh',
        };
      } 
      
      

     
    }

    
    setPanelStyle(styles);
    
  };

  // Llama a la función para actualizar los estilos cuando cambie panelInfo
  useEffect(() => {
    updatePanelStyle();
    window.addEventListener('resize', updatePanelStyle);

    return () => {
      window.removeEventListener('resize', updatePanelStyle);
    };
  }, [panelInfo]);

  return (
    <aside className="panel" style={panelStyle}>

      {panelInfo === 'heroHome' && <InfoHeroHome />}

    </aside>
  );

};




const Slider = ({ dataSlider, panelInfo }) => {


    // defineel background img inicial del slider
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url('${dataSlider[0].img}')`,
    
  });

  const updateWrapperStyle = () => {
    let styles = {
      backgroundImage: `url('${dataSlider[activeID].img}')`,
    };
  
    if (panelInfo === 'heroHome') {
      styles.backgroundSize = '100% 100%';
    } 
    
  
    setWrapperStyle(styles);
  };

    
     // Llama a la función para actualizar los estilos cuando cambie panelInfo
 /*  useEffect(() => {
    updateWrapperStyle();
    window.addEventListener('resize', updateWrapperStyle);

    return () => {
      window.removeEventListener('resize', updateWrapperStyle);
    };
  }, [panelInfo]); */


  // cambia el background del slider por el id
  const changeActive = (id) => {
    setActiveID(id);
    setWrapperStyle({ backgroundImage: `url('${dataSlider[id].img}')` });
  };

  // modifica el estilo del panel.aside en funcion del panelInfo
  


  // script que define el cambio de id del slider por periodos de tiempo 
  /* useEffect(() => {
    const interval = setInterval(() => {
      const nextID = (activeID + 1) % dataSlider.length;
      changeActive(nextID);
    }, 7000); 

    return () => {
      clearInterval(interval); 
    };
  }, [activeID]); */ // Se ejecuta cada vez que activeID cambia


  return (
    <section className="wrapper" style={wrapperStyle}>
      {activeID !== undefined && (
      <Panel dataSlider={dataSlider} panelInfo={panelInfo} activeID={activeID} />
    )}

    {panelInfo === "heroHome" && <div className='overlay-wrapper'></div>}

    {panelInfo === "heroHome" && <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/home/sliderHomeIcons.png"
        alt="iconos-banner" className='icons-banner'/>}
    

    </section>
  );
};

export default Slider;
