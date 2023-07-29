// components/Accordion.js
import { useState } from 'react';
import styles from './Accordion.module.css';
import { HiChevronRight } from 'react-icons/hi';


const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        personal info
        <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}><HiChevronRight/></span>
      </div>
      <div style={{height:`${isExpanded ? '200px' : '0px'}`, overflow:"hidden", transition:"height 0.4s ease"}} >
        <p>hsghyushuyhjjjjjjssssssssssssssssssss</p>
        <p>hsghyushuyhjjjjjjssssssssssssssssssss</p>
        <p>hsghyushuyhjjjjjjssssssssssssssssssss</p>
        <p>hsghyushuyhjjjjjjssssssssssssssssssss</p>
            </div>
    </div>
  );
};

export default Accordion;
