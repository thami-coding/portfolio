import { useState } from "react";
import styles from "./Accordion.module.css";
import Title from "../title/Title"
import { IoMdMegaphone } from "react-icons/io";
const faqData = [
  {
    question: "What is your full name?",
    answer:
      "Thamsanqa"
  },
  {
    question: "What is your favourite series?",
    answer:
      "The Mentalist!"
  },
  {
    question: "Which football team do you support?",
    answer:
      "CHELSEAAAAAA!!!!"
  },
  {
    question: "First Algorithm you learned?",
    answer:
      "Binary Search"
  },
  {
    question: "Where are you from?",
    answer:
      "KZN Durban"
  },
  {
    question: "Which type of music do you like?",
    answer:
      "Good Music!"
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Title title="FAQ ABOUT ME" />
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={`${styles.header} ${activeIndex === index && styles.active
                }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={styles.icon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`${styles.content} ${activeIndex === index && styles.open}`}
            >
              <p className={styles.text}> {item.answer === "CHELSEAAAAAA!!!!" && <IoMdMegaphone size={25} />} {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}