import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FaGithub } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";


interface BentoProjectCardProps {
  project: {
    name: string;
    category: string[];
    description: string;
    fullDescription?: string;
    repoLink: string;
    thumbnail: string;
    technologies: string[];
    slug: string;
    size?: 'small' | 'medium' | 'large';
    featured?: boolean;
  };
  delay?: number;
  index: number;
}

const BentoProjectCard = ({ project, index }: BentoProjectCardProps) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Determine size class
  let sizeClass = "small-card";
  if (project.size === "medium") {
    sizeClass = "medium-card";
  } else if (project.size === "large") {
    sizeClass = "large-card";
  }

  // Intersection Observer to detect when card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current && observer) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation when clicking the GitHub link
    if ((e.target as HTMLElement).closest('.github-link')) {
      return;
    }
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`project-card ${sizeClass} ${project.featured ? 'featured-card' : ''} ${isVisible ? 'reveal' : ''}`}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? 
        { opacity: 1, y: 0, transition: { duration: 0.4, delay: Math.min(index * 0.03, 0.3) }} : 
        { opacity: 0, y: 20 }
      }
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Background gradient effect */}
      <div className="card-gradient"></div>
      
      <div className="project-info">
        <div>
          <div className="project-header">
            <h3 className="project-title">{project.name}</h3>
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
            </a>
          </div>


          
          <p className="project-description">
            {project.description}
          </p>
        </div>
        
        <div className="project-tags">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="technology-tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoProjectCard;