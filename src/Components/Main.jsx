const Main = () => {
  return (
    <main>
      <section id="inicio">
        <div className="bg-blue-500 text-white p-4">
          Este es mi componente con estilos de Tailwind CSS.
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Mi Botón
        </button>

        <h2 className="">Inicio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          perferendis fugiat cupiditate numquam eum alias fuga pariatur tempore.
          Nesciunt tenetur enim soluta! Amet iure, suscipit neque voluptatum
          modi recusandae minima.
        </p>

        {/* Contenido de la sección "Inicio" */}
      </section>

      <section id="habilidades" className="hidden">
        <h2>Habilidades</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          perferendis fugiat cupiditate numquam eum alias fuga pariatur tempore.
          Nesciunt tenetur enim soluta! Amet iure, suscipit neque voluptatum
          modi recusandae minima.
        </p>
        {/* Contenido de la sección "Habilidades" */}
      </section>

      <section id="proyectos">
        <h2>Proyectos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          perferendis fugiat cupiditate numquam eum alias fuga pariatur tempore.
          Nesciunt tenetur enim soluta! Amet iure, suscipit neque voluptatum
          modi recusandae minima.
        </p>
        {/* Contenido de la sección "Proyectos" */}
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          perferendis fugiat cupiditate numquam eum alias fuga pariatur tempore.
          Nesciunt tenetur enim soluta! Amet iure, suscipit neque voluptatum
          modi recusandae minima.
        </p>
        {/* Contenido de la sección "Contacto" */}
      </section>
    </main>
  );
};

export default Main;
