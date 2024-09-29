import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

interface ProjectData {
  title: string;
  description: string[];
}

interface ExperienceData {
  company: string;
  duration: string;
  icon: string;
  title: string;
  description: string;
  projects: ProjectData[];
}

const experiences: ExperienceData[] = [
  {
    "company": "Packapeer Private Limited",
    "duration": "Nov 2022 - Dec 2023",
    "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS404jJKFky5InRVu8poQU4gwGqSoMkWCyLAQ&s",
    "title": "Full Stack Developer",
    "description": "Led e-commerce and clinical app development as a full stack developer.",
    "projects": [
      {
        "title": "Technocart - E-Commerce",
        "description": [
          "Developed an e-commerce app with roles and user management.",
          "Integrated payments, order tracking, and admin panels."
        ]
      },
      {
        "title": "DrCare - Clinical Management",
        "description": [
          "Built a doctor-patient management site with role-based dashboards and payment systems."
        ]
      },
      {
        "title": "Mobile App Collaboration",
        "description": [
          "Collaborated on cross-platform mobile apps with Flutter developers."
        ]
      }
    ]
  },
  {
    "company": "Tikanga Private Limited",
    "duration": "Jan 2024 - Present",
    "icon": "https://tikanga.in/assets/images/name-logo.svg",
    "title": "Software Development Engineer",
    "description": "Focused on backend infrastructure for different projects",
    "projects": [
      {
        "title": "Nandhini Milks",
        "description": [
          "Developed a management system for Nandhini Milks, one of India's largest dairy manufacturers."
        ]
      },
      {
        "title": "Simplus - Mutual Fund Application",
        "description": [
          "Architected a secure, scalable mutual fund app with key investment features."
        ]
      },
      {
        "title": "Canadian Payment Project",
        "description": [
          "Integrated Llama3 API for enhanced chatbot functionality."
        ]
      },
      {
        "title": "Other Projects",
        "description": [
          "Created a payment link sharing platform and e-commerce backend."
        ]
      }
    ]
  }
]


interface ExperienceCardProps {
  company: string;
  duration: string;
  icon: string;
  title: string;
  description: string;
  projects: ProjectData[];
  index: number;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ company, duration, icon, title, description, projects, index }) => {
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
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        ) : (
          <BriefcaseIcon className="w-12 h-12 text-blue-400 mr-4" />
        )}
        <div>
          <h3 className="text-2xl font-semibold text-white">{company}</h3>
          <p className="text-gray-400">{duration}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-xl text-blue-400">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
      {projects.map((project, i) => (
        <div key={i} className="mb-4">
          <h5 className="text-lg font-semibold text-blue-300">{project.title}</h5>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {project.description.map((desc, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: j * 0.1, duration: 0.5 }}
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

const Experience: FC = () => {
  return (
    <div className="py-16 bg-black">
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
              title={exp.title}
              description={exp.description}
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

export default Experience;
