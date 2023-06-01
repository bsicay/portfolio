import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { SkillBar } from "../components/SkillBar";

const MySkills = () => {
  return (
    <section id="habilidades" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-white">HABILIDADES</span>
          </p>
          <LineGradient width="w-1/3" />
          
        </motion.div>
      </div>
      {/* SKILLS */}
      <div className="mt-12 gap-12 flex flex-col items-center justify-center font-semibold">
      <SkillBar skill="NodeJS" percentage={85} />
      <SkillBar skill="SQL" percentage={80} />
      <SkillBar skill="Java/Spring" percentage={60} />
      <SkillBar skill="Python" percentage={50} />
      <SkillBar skill="MongoDB" percentage={40} />
    </div>
    </section>
  );
};

export default MySkills;
