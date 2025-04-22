export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "general overview portfolio",
    description: "Formal portfolio website",
    logo: "/logos/shamsPassportPic.jpg",
    link: "https://github.com/shams03/formal_portfolio",
    slug: "Formal Portfolio",
  },
  {
    title: "Full stack EX",
    description:
      'An X clone ,Next.js with GraphQL for data queries with PostgreSQL, and deployed the platform on AWS for scalability and performance. But lets call it "EX"',
    logo: "/logos/x_logo.png",
    link: "https://github.com/shams03/x-clone",
    slug: "x-clone-full-stack",
  },
  {
    title: "BatmanStabs",
    description:
      "Chrome extension for tab hoarders so as to collect and merge all tabs in .bat file and remove them from the memory.",
    logo: "/logos/batman_logo.png",
    link: "https://github.com/shams03/batmanStabs-extension",
    slug: "batmanStabs-chrome-extension",
  },
  {
    title: "Golang Cart",
    description:
      "Three microservices accounts,orders and products in Go integrated with each connected to  their own database forscalability and loose coupling with gRPC.",
    logo: "/logos/go_microservices.png",
    link: "https://github.com/shams03/go-ecom-microservice",
    slug: "GO-microservice",
  },
  {
    title: "Terminal-Portfolio (live)",
    description:
      "Get to know me by using CLI, well the data is a bit old here. Updating Soon",
    logo: "/logos/me.jpg",
    link: "https://portfolio-terminal-iota-seven.vercel.app/",
    slug: "terminal app",
  },
  {
    title: "RAG Web App",
    description: "Coming soon ... ",
    logo: "/logos/rag_app.png",
    link: "https://github.com/shams03/multi-ai-rag-chatbots",
    slug: "RAG app",
  },
  {
    title: "RizzCabs",
    description: "Coming soon ... ",
    logo: "/logos/rizzCabs.png",
    link: "https://github.com/shams03/multi-ai-rag-chatbots",
    slug: "RAG app",
  },
  {
    title: "SketchyRizz",
    description: "Coming soon ... ",
    logo: "/logos/sketchyRizz.png",
    link: "https://github.com/shams03/multi-ai-rag-chatbots",
    slug: "RAG app",
  },
  {
    title: "Lock-AR Zero Knowledge PMS",
    description:
      "Password management system with client-side encryption and fixed 32 bit output .",
    logo: "/logos/lock_ar.png",
    link: "https://github.com/shams03/lock-ar",
    slug: "Lock-AR",
  },
  {
    title: "VSCode Portfolio",
    description:
      "A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/shams03/vscode-portfolio",
    slug: "vscode-portfolio",
  },
];
