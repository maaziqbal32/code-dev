import project1 from "/web-dev.avif";
import project2 from "/ai-automation.png";
import project3 from "/ui-design.jpg";

import artificial1 from "/ai-project1.png";
import artificial2 from "/ai-project2.jpeg";
import artificial3 from "/ai-project3.jpeg";

import web1 from "/web1.jpg";
import web2 from "/web2.jpeg";
import web3 from "/web3.webp";

import ui1 from "/ui1.webp";
import ui2 from "/ui2.jpeg";
import ui3 from "/ui3.webp";

export interface ProjectGalleryItem {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  year: string;
  area: string;
  description: string;
  challenge: string;
  solution: string;
  gallery: ProjectGalleryItem[];
}

export const projects: Project[] = [
  {
    id: "web-development",
    title: "Web Development",
    location: "Modern Web Applications",
    category: "Development",
    image: project1,
    year: "2025",
    area: "Full-Stack Solutions",

    description:
      "We engineer high-performance, scalable web applications tailored to your business goals. From interactive dashboards to complex e‑commerce platforms, our solutions combine cutting‑edge frontend frameworks with robust backend architectures to deliver exceptional user experiences and long‑term growth.",

    challenge:
      "Many startups and established businesses struggle with web platforms that become slow, unmaintainable, or unable to handle traffic spikes. Legacy code, poor architectural choices, and lack of performance optimization often hinder scalability and user retention.",

    solution:
      "Our team designs and builds modern web applications using React, Next.js, and Node.js, with cloud‑native infrastructure on AWS or Vercel. We implement server‑side rendering, incremental static regeneration, and API optimization to ensure lightning‑fast load times and seamless scaling as your user base grows.",

    gallery: [
      {
        title: "Modern UI Architecture",
        description:
          "We crafted a component‑driven interface using a custom design system, ensuring consistency across the platform. The UI prioritizes usability and accessibility, with responsive layouts that adapt perfectly to any device.",
        image: web1,
      },
      {
        title: "Scalable Backend System",
        description:
          "The backend was built with microservices and serverless functions, enabling independent scaling of critical features. We integrated a high‑performance database with caching layers to handle thousands of concurrent requests without latency.",
        image: web2,
      },
      {
        title: "Performance Optimization",
        description:
          "Advanced techniques such as lazy loading, image optimization, and code splitting reduced initial load times by over 60%. We also implemented real‑time monitoring to continuously fine‑tune performance.",
        image: web3,
      },
    ],
  },

  {
    id: "ai-automation",
    title: "AI Automation",
    location: "AI Marketing & Automation",
    category: "Artificial Intelligence",
    image: project2,
    year: "2025",
    area: "Automation Systems",

    description:
      "We build intelligent automation systems that transform how businesses operate. By integrating AI into marketing, sales, and support workflows, we help you reduce manual effort, increase conversion rates, and deliver personalized customer experiences at scale.",

    challenge:
      "Repetitive tasks such as lead qualification, email follow‑ups, and customer support consume valuable team hours. Without automation, businesses miss opportunities to engage prospects promptly and struggle to maintain consistent communication.",

    solution:
      "We design custom AI pipelines using tools like LangChain, OpenAI, and Zapier. Our solutions automate lead scoring, nurture sequences, and even handle complex customer queries via AI‑powered chatbots. The result is a 24/7 operation that frees your team to focus on high‑value work.",

    gallery: [
      {
        title: "AI Workflow Automation",
        description:
          "We created an end‑to‑end automation that captures leads from multiple sources, enriches them with AI‑driven data, and triggers personalized email sequences based on user behavior—all without human intervention.",
        image: artificial1,
      },
      {
        title: "AI Chat Integration",
        description:
          "A context‑aware chatbot was integrated into the website and WhatsApp, handling 80% of common support inquiries instantly. It learns from past interactions to improve accuracy and can seamlessly escalate complex issues to human agents.",
        image: artificial2,
      },
      {
        title: "Smart Data Insights",
        description:
          "Automated analytics dashboards aggregate data from CRM, ads, and support tickets, using AI to surface actionable insights—such as which lead sources yield the highest ROI—so you can make data‑driven decisions faster.",
        image: artificial3,
      },
    ],
  },

  {
    id: "uiux-design",
    title: "UI / UX Design",
    location: "Digital Product Experiences",
    category: "Design",
    image: project3,
    year: "2025",
    area: "Product Design",

    description:
      "We create intuitive, visually compelling interfaces that captivate users and drive engagement. Through a human‑centered design process, we transform complex ideas into seamless digital experiences that users love and remember.",

    challenge:
      "Many digital products suffer from confusing navigation, inconsistent branding, and low user retention. A poor user experience not only frustrates visitors but also undermines business goals and increases churn.",

    solution:
      "Our design approach begins with deep user research and persona development, followed by rapid prototyping and usability testing. We deliver polished, responsive designs backed by a scalable design system, ensuring every interaction feels natural and purposeful.",

    gallery: [
      {
        title: "User Research",
        description:
          "We conducted interviews and surveys with target users to uncover pain points and motivations. The insights directly informed information architecture and feature prioritization, ensuring the final product truly meets user needs.",
        image: ui1,
      },
      {
        title: "Interactive Prototyping",
        description:
          "High‑fidelity, clickable prototypes were built in Figma to simulate the complete user journey. We ran multiple rounds of testing, refining interactions based on real feedback before a single line of code was written.",
        image: ui2,
      },
      {
        title: "Design System",
        description:
          "A comprehensive design system was established, including reusable components, typography scales, and color palettes. This system accelerates development, maintains visual consistency, and makes future iterations effortless.",
        image: ui3,
      },
    ],
  },
];