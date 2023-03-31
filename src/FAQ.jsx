import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { useState } from "react";

import "./FAQstyle.scss";
import ExpandMoreIcon from "../node_modules/@mui/icons-material/ExpandMore"

  const FAQ = () => {
    const [openDetailId, setOpenDetailId] = useState(null);
    const faqs = [
        {
          id: 1,
          question: "What is TrueDocs?",
          answer: "TrueDocs is a platform that utilizes blockchain technology and the Solana network to provide secure and efficient document authentication. Users can easily create NFTs of their documents and store them on the blockchain, providing an extra layer of security and trust. The documents are tamper-proof and can be easily verified by any business or institution."
        },
        {
          id: 2,
          question: "Can I share my NFTs with any business or institution?",
          answer: "Yes, once an NFT is created, users can share the document with any business or institution of your choice. This makes the verification process more convenient than ever before."
        },
        {
            id: 3,
            question: "Is my personal information and document data secure on TrueDocs?",
            answer: "Yes, TrueDocs takes the security and privacy of our users very seriously. We use state-of-the-art security measures to protect user data and documents, and all data is encrypted both in transit and at rest."
          },
          {
            id: 4,
            question: "How can I contact TrueDocs customer support?",
            answer: "We are always here to help. You can contact us via email at [email address here], or via our website's contact form. Our customer support team will respond as soon as possible to assist you with any questions or concerns. Additionally, you can also reach us through our social media platforms, like Twitter and Instagram."
          },
          {
            id: 5,
            question: "What types of documents can I create NFTs of on TrueDocs?",
            answer: "Users can create NFTs of any type of document, including PDFs, images, and more. Our platform is designed to make the process of document authentication simple and user-friendly."
          },
      ];
  
    const handleClick = (id) => {
      setOpenDetailId(openDetailId === id ? null : id);
    }
  
    return (
      <div id="fourth">
        
        <div id="faq-box" className="d-flex align-items-center justify-content-center">
          <div id="faq-container" className="px-5 py-3  d-flex flex-column align-items-center justify-content-evenly">
            <h2>FAQ</h2>
            {faqs.map((faq, index) => (
              <>
                <summary onClick={() => handleClick(faq.id)}>
                  <h4>{faq.question}</h4>
                  <ExpandMoreIcon />
                </summary>
                {openDetailId === faq.id && <p>{faq.answer}</p>}
                {index !== faqs.length - 1 && <hr />}
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  
  
  
  

  
  
  
  
  
  

  
  

