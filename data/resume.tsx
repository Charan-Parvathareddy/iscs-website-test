import { Icons } from "@/components/magicui/icons";

export const DATA = {

  projects: [
    {
      title: "Diabetic Retinopathy Detection G-Nayana",
      href: "https://ai-ra.vercel.app/",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "At ISCS Technologies, we harness the power of Artificial Intelligence (AI) and Machine Learning (ML) to deliver innovative, data-driven solutions tailored to your business needs. ",
        
      technologies: [
        "Convolutional Neural Networks (CNNs)",
        "Vision Transformers (ViTs)",
        "Deep Learning",
        "Medical Imaging Analysis",
        "Automated Image Analysis",
        "AI-based Diagnostic Tools",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-ra.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/G-Nayana/diabetic-retinopathy.jpg",
      video: "",
    },
    {
      title: "Integrated HRMS",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "At ISCS Technologies, we use advanced AI and ML to create an Integrated HRMS that automates HR functions, improves efficiency, and delivers data-driven insights for better decision-making .",
      technologies: [
        "Docker",
        "Jenkins",
        "React Native",
        "MongoDB",
        "FastAPI",
        "MongoDB",
        "Next.js",
        "AI-based Diagnostic Tools",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "https://pub-ccb175376fc94e64b1b2376fadf6c341.r2.dev/analytics-dashboard.mp4",
    },
    {
      title: "E-Learning Platform",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "At ISCS Technologies, we leverage AI and ML to build a personalized, data-driven E-Learning Platform that enhances learning experiences, automates content delivery, and tracks progress efficiently.",
  
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Power BI",
        "AWS",
        "Flutter",
        "Stripe",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Mi-Ware",
      href: "https://automatic.chat",
      dates: "April 2023 - Present",
      active: true,
      description:
        "At ISCS Technologies, we offer a Python-based Middleware Tool that serves as a free alternative to TIBCO, enabling seamless integration between applications, data flow automation, and efficient process management.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
} as const;
