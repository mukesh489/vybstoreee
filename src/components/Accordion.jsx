import React, { useState } from "react";
import faqdata from "../assets/faqData.json";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqdata.accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <button
            onClick={() => handleToggle(index)}
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#f1f1f1",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fafafa",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
