import Note from "../../assets/images/Note.webp";
import Edit from "../../assets/images/edit.webp";
import Contact from "../../assets/images/contact.webp";
import Security from "../../assets/images/security.webp";
import cloud from "../../assets/images/cloud.webp";
export const questions = [
  {
    id: 1,
    type: "general",
    icon: Note,
    question: "What is NoteFlow?",
    answer:
      "NoteFlow is an AI-powered note-taking application designed to help individuals and teams organize, manage, and retrieve notes effortlessly.",
  },
  {
    id: 2,
    type: "general",
    icon: Edit,
    question: "How does NoteFlow use AI to enhance note-taking?",
    answer:
      "You can sign up for a free account on our website and follow the onboarding process.",
  },
  {
    id: 3,
    type: "pricing",
    icon: Contact,
    question: "Can NoteFlow be used for team collaboration?",
    answer: "We offer flexible pricing plans starting at $9.99/month.",
  },

  {
    id: 4,
    type: "features",
    question: "Can I access NoteFlow on multiple devices?",
    icon: cloud,
    answer:
      "Our key features include real-time collaboration, automated workflows, and detailed analytics.",
  },

  {
    id: 5,
    type: "integration",
    icon: Security,
    question: "Is my data secure with NoteFlow?",
    answer:
      "We support integration with most popular tools including Slack, Google Workspace, and Microsoft Office.",
  },
];
