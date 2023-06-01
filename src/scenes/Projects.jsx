import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, cover}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
      </div>
      <img className="max-h-60" src={cover} alt={projectTitle} width={'400px'} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-sky-600">PRO</span>YECTOS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Cuento con más de cuatro años de experiencia en programación por 
          los cuales he desarrollado proyectos personales enfocados en varios
          objetivos, entre los más destacados se encuentran:
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-indigo-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            PROYECTOS WEB
          </div>
          <Project title="POKEMON BATTLE" description="Simulador del sistema de peleas del videojuego Pokemon con los primeros 151 pokemones" cover="https://cdn.discordapp.com/attachments/717418780065529856/1113507934790500402/image.png"/>
          <Project title="REACT CLONE PAGE" description="Clonado de la pagina web de React" cover="https://cdn.discordapp.com/attachments/717418780065529856/1113893507061518387/image.png"/>

          {/* ROW 2 */}
          <Project title="PURE CSS IMAGE" description="Imagen realizada con CSS puro" cover="https://cdn.discordapp.com/attachments/717418780065529856/1113894176921243678/image.png"/>
          <Project title="Chat JS" description="Chat elaborado mediante la manipulacion de DOM, conectado a una API para el intercambio de mensajes" cover="https://cdn.discordapp.com/attachments/717418780065529856/1113891875464679514/image.png"/>
          <Project title="CASTLE CLOTHING" description="Página sobre venta de accesorios de caballero" cover="https://cdn.discordapp.com/attachments/717418780065529856/1113894900937789602/image.png"/>

          {/* ROW 3 */}
          <Project title="HOSPITAL INFECTOLOGÍA" description="Sistema CRUD de un hospital realizado en JAVA" cover="https://static.wixstatic.com/media/e0b7a6_bd1ab3d4744041fa853bd72b6760648c~mv2.jpg"/>
          <Project title="TWITTER CLONE" description="Backend del sistema de twitter realizado en NodeJs con Express" cover="https://static.wixstatic.com/media/e0b7a6_12d2fd57397a4637a8e304fb1dd40f68~mv2.jpg"/>
          <div
            className="flex justify-center text-center items-center p-10 bg-indigo-800
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            APLICACIONES DE ESCRITORIO
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
