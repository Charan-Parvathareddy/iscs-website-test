// lib/blog-data.ts

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Unlocking the Power of RAG",
      excerpt: " How Retrieval-Augmented Generation is Revolutionizing Multi-Agent Collaboration . ",
      date: "2024-06-01"
    },
    {
      id: "2",
      title: "Generative AI and RAG",
      excerpt: "The Perfect Duo for Building Smarter, Collaborative Multi-Agent Systems",
      date: "2024-06-15"
    },
    {
      id: "3",
      title: "Agents in Action:",
      excerpt: "Generative AI Meets RAG for Unprecedented Problem-Solving in Multi-Agent Environments",
      date: "2024-07-01"
    },
    {
      id: "4",
      title: "Smart Agents, Smarter Solutions",
      excerpt: "How Generative AI and RAG Enable Multi-Agent Systems to Think Independently and Collaboratively",
      date: "2024-07-15"
    },
    {
      id: "5",
      title: "Generative AI Meets the Collective Mind",
      excerpt: "The Role of RAG in Multi-Agent Systems",
      date: "2024-08-01"
    }
  ];