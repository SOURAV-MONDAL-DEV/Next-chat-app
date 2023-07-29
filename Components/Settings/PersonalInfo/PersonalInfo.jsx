// components/Accordion.js
import { useState } from "react";
import styles from "./PersonalInfo.module.css";
import { HiChevronRight } from "react-icons/hi";

const PersonalInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        personal info
        <span
          className={`${styles.arrow} ${isExpanded ? styles.expanded : ""}`}
        >
          <HiChevronRight />
        </span>
      </div>
      <div
        style={{
          height: `${isExpanded ? "260px" : "0px"}`,
          overflow: "hidden",
          transition: "height 0.4s ease",
        }}
      >
        <div className={styles.content_inner}>
          <div className={styles.content_elements}>
            <div>
              <p className={styles.Accordion_title}>Name</p>
              <p>Patricia Smith</p>
            </div>
            
          </div>
          <div className={styles.content_elements}>
            <p className={styles.Accordion_title}>Email</p>
            <p>adc@123.com</p>
          </div>
          <div className={styles.content_elements}>
            <p className={styles.Accordion_title}>Time</p>
            <p>11:40 AM</p>
          </div>
          <div className={styles.content_elements}>
            <p className={styles.Accordion_title}>Location</p>
            <p>California, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
