import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  { heading: "Software Engineer", description: "Developed optmised backend code using node js and handled 3 projects simultaniously" },
  // Add more experiences here
];

export const Experience = () => {
  return (
    <div className="relative p-8 flex flex-col items-center">
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          heading={exp.heading}
          description={exp.description}
          index={index}
        />
      ))}
    </div>
  );
};

interface ExperienceItemProps {
  heading: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ heading, description, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative flex items-center mb-12">
      {/* Circle with animated background color */}
      <motion.div
        ref={ref}
        className="relative w-6 h-6 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center"
        style={{ backgroundColor: inView ? 'blue' : 'gray' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Line inside the circle */}
        <div className="absolute w-px h-full bg-gray-300" style={{ backgroundColor: inView ? 'blue' : 'gray' }}></div>
      </motion.div>
      <div className="ml-8">
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
