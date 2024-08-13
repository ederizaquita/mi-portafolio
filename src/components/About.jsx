import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" flex flex-col items-center  h-screen w-screen "
    >
      <h2 className="font-semibold text-[40px]">About</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white">
           Soy un programador front-end apasionado por crear experiencias web excepcionales mediante la implementación de tecnologías modernas.
          <br />
          Con experiencia en HTML, CSS y JavaScript, así como en frameworks como React
          <br />
          mi objetivo es construir interfaces de usuario atractivas y funcionales que ofrezcan una experiencia fluida y envolvente para los usuarios.{" "}
        </p>
        <p className="text-white">
          Habilidades:<br />
          HTML/CSS: Desarrollo de estructuras web y estilos visuales adaptativos y  accesibles.
          <br/>
          JavaScript: Implementación de interactividad avanzada y lógica de aplicación dinámica.
          <br />
          React: Creación de componentes reutilizables y gestión eficiente del estado de la aplicación.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
