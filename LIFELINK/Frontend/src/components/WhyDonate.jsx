import { useState } from "react";
import "../styles/WhyDonate.css";

function WhyDonate() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Why should I donate blood?",
      answer:
        "Donating blood helps save lives. Your donation can support patients undergoing surgery, accident victims, cancer patients, and those in need of emergency care.",
    },
    {
      question: "Who can donate blood?",
      answer:
        "Generally, healthy individuals aged 18-65 years with sufficient hemoglobin levels can donate blood.",
    },
    {
      question: "How can I donate blood at Lifelink Healthcare?",
      answer:
        "You can register as a donor, schedule an appointment, and visit the hospital for donation after confirmation.",
    },
    {
      question: "Is blood donation safe?",
      answer:
        "Yes, it is completely safe. Sterile and single-use equipment is used for every donor.",
    },
    {
      question: "How long does it take to donate blood?",
      answer:
        "The actual donation takes around 10-15 minutes, but the full process may take 30-45 minutes.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood every 3 months.",
    },
    {
      question: "What should I eat before donating blood?",
      answer:
        "Eat a healthy meal rich in iron and stay hydrated before donating blood.",
    },
    {
      question: "Will donating blood make me weak?",
      answer:
        "No, your body quickly replaces the donated blood. You may feel slightly tired but recover fast.",
    },
    {
      question: "Are there any side effects after donating blood?",
      answer:
        "Minor dizziness or fatigue may occur temporarily, but serious side effects are rare.",
    },
    {
      question: "What happens to my donated blood?",
      answer:
        "Your blood is tested, stored safely, and used for patients in need in hospitals.",
    },
  ];

  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((item, index) => (
          <div key={index} className="faq-item">

            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className="icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyDonate;