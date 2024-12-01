import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCodeBranch, FaBug, FaSearchengin, FaLanguage  } from 'react-icons/fa';
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import skillsData from '../../Data/softskills.json';
import './Softskills.css'
const SoftSkills = () => {
  const [skills, setSkills] = useState([]);
  const [progress, setProgress] = useState([]);  
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => {
    setSkills(skillsData.skillsData);
  }, []);

  useEffect(() => {
    if (skills.length > 0) {
      const progressArray = skills.map((skill) => ({
        id: skill.id,
        level: 0, 
        targetLevel: skill.level, 
      }));
      setProgress(progressArray);

      skills.forEach((skill, index) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          if (currentProgress < skill.level) {
            currentProgress += 1;
            setProgress(prevProgress => {
              const newProgress = [...prevProgress];
              newProgress[index].level = currentProgress;
              return newProgress;
            });
          } else {
            clearInterval(interval);
          }
        }, 20); 
      });

      setIsLoaded(true); 
    }
  }, [skills]);

  return (
    <div className="softskills-container">
      <Link to='/' ><div className='arrowleft' ><FaAngleLeft /></div></Link>
      <h2> Skills</h2>
      <div className="skills-list">
        {isLoaded ? (
          skills.map((skill, index) => {
            const Icon = skill.icon === 'FaHtml5' ? FaHtml5 :
                        skill.icon === 'FaCss3Alt' ? FaCss3Alt :
                        skill.icon === 'FaJsSquare' ? FaJsSquare :
                        skill.icon === 'FaReact' ? FaReact :
                        skill.icon === 'FaCodeBranch' ? FaCodeBranch :
                        skill.icon === 'FaBug' ? FaBug :
                        skill.icon === 'FaSearchengin' ? FaSearchengin :
                        skill.icon === 'FaLanguage' ? FaLanguage :
                        null;

            return (
              <div key={skill.id} className="skill-card">
                {Icon && <Icon className="skill-icon" style={{ color: skill.color }} />}
                <p className="skill-name">{skill.name}</p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${progress[index]?.level}%`,  
                      backgroundColor: skill.color,
                      transition: 'width 0.5s ease-in-out', 
                    }}
                  ></div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Chargement...</p>  
        )}
      </div>
    </div>
  );
};

export default SoftSkills;
