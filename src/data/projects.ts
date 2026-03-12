import project1 from "/web-dev.avif";
import project2 from "/ai-automation.png";
import project3 from "/ui-design.jpg";

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
  images: string[];
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
      "We build fast, scalable, and modern web applications that help businesses establish a powerful online presence. Our solutions focus on performance, security, and seamless user experience.",
    challenge:
      "Many startups struggle to build reliable web platforms that can scale with their growth while maintaining performance and usability.",
    solution:
      "We develop high-performance web applications using modern technologies such as React, Next.js, Node.js, and cloud infrastructure to ensure scalability and reliability.",
    images: [project1],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    location: "AI Marketing & Business Automation",
    category: "Artificial Intelligence",
    image: project2,
    year: "2025",
    area: "AI Systems",
    description:
      "Our AI automation systems help businesses automate marketing, customer engagement, and lead generation using intelligent workflows and smart integrations.",
    challenge:
      "Businesses often spend too much time on repetitive marketing and operational tasks that could be automated.",
    solution:
      "We design AI-driven automation systems that manage marketing campaigns, lead nurturing, customer responses, and data insights automatically.",
    images: [project2],
  },
  {
    id: "uiux-design",
    title: "UI/UX Designing",
    location: "Modern Digital Experiences",
    category: "Design",
    image: project3,
    year: "2025",
    area: "Product Design",
    description:
      "We design beautiful and intuitive digital interfaces that enhance user experience and strengthen brand identity across web and mobile platforms.",
    challenge:
      "Poor user experience can reduce engagement and make it difficult for businesses to convert visitors into customers.",
    solution:
      "Our design process focuses on user research, modern design systems, and interactive prototypes to create visually stunning and highly usable interfaces.",
    images: [project3],
  },
];