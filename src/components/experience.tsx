import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon } from '@heroicons/react/solid';

const experiences = [
  {
    company: "Packapeer Private Limited",
    duration: "Nov 2022 - Dec 2023",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS404jJKFky5InRVu8poQU4gwGqSoMkWCyLAQ&s",
    projects: [
      "Developed a scalable eCommerce platform improving online sales by 30%.",
      "Created a clinical management system integrating real-time chat and live notifications, enhancing patient-doctor communication efficiency."
    ],
  },
  {
    company: "Tikanga Private Limited",
    duration: "Jan 2024 - Present",
    icon: "https://tikanga.in/assets/images/name-logo.svg",
    projects: [
      "Architected and implemented the infrastructure for a mutual fund application, ensuring high availability and security.",
      "Developed 'Nandhini Milks' delivery and product management system, streamlining operations for one of India's largest dairy companies.",
      "Integrated Llama3 API for advanced chatbot functionalities in a Canadian payment project, enhancing user interaction and support.",
      "Led backend development for a payment link application facilitating seamless UPI transactions and real-time payment requests."
    ],
  },
];

const Experience = () => {
  return (
    <div className="py-16  bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Professional Experience
      </h2>
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row md:justify-start md:space-x md:ml-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              duration={exp.duration}
              projects={exp.projects}
              icon={exp.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  company,
  duration,
  projects,
  icon,
  index,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
      whileHover={{ y: -5, boxShadow: '0px 10px 15px rgba(255, 255, 255, 0.2)' }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 md:mb-0 max-w-md mx-auto"
    >
      <div className="flex items-center mb-4">
        {icon ? (
          <img
            src={icon}
            alt={`${company} logo`}
            className="w-12 h-12 mr-4 object-contain"
            loading="lazy"
            onError={(e) => e.target.style.display = 'none'}
          />
        ) : (
          <BriefcaseIcon className="w-12 h-12 text-blue-400 mr-4" />
        )}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {company}
          </h3>
          <p className="text-gray-400">{duration}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {projects.map((project, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {project}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
