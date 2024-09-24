import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I get started?",
      answer:
        "Getting started is easy! Sign up for an account and gain access to our platform.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible, with free and paid options to suit different needs.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide support through multiple channels, including chat, email, and our knowledge base.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel anytime without any hidden fees or penalties.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "white.100",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Box
              key={index}
              sx={{
                mb: 4,
                p: 2,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                boxShadow: 1,
                backgroundColor: "white",
              }}
            >
              <Button
                fullWidth
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  padding: "16px",
                }}
                onClick={() => toggleQuestion(index)}
              >
                <Typography variant="h6">{faq.question}</Typography>
                <Box
                  sx={{
                    transform:
                      openQuestion === index ? "rotate(0)" : "rotate(-180deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Box>
              </Button>
              {openQuestion === index && (
                <Box sx={{ p: 2, paddingTop: 0 }}>
                  <Typography>{faq.answer}</Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
