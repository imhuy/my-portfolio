import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Chainplay.gg",
    description:
      "Chainplay.gg helps you find the next big NFT-powered, blockchain games to play &amp; invest. Find hidden gems in crypto gaming market",
    image: "/images/chainplay.png",
    tags: ["NextJS", "NodeJS", "C#", "MySQL", "Trading"],
    links: {
      source: "#",
      demo: "https://chainplay.gg",
    },
  },
  {
    title: "Alphaquest.io",
    description: "Crypto market analysis project via social network x, giving price trend predictions",
    image: "/images/alphaquest.png",
    tags: ["NextJS", "NodeJS", "C#", "MySQL", "SEO"],
    links: {
      source: "#",
      demo: "https://alphaquest.io",
    },
  },
  {
    title: "Lead3.io",
    description: "Find new advertising clients for your web3 media & marketing agency business",
    image: "/images/lead3.png",
    tags: ["NextJS", "NodeJS", "C#", "MySQL", "API"],
    links: {
      source: "#",
      demo: "https://lead3.io",
    },
  },
  {
    title: "TicketX.vn",
    description: "All-in-one event/expo management website for every organisation's use case",
    image: "/images/ticketx.png",
    tags: ["NextJS", "NodeJS", "NestJS", "PostgreSQL", "UI/UX"],
    links: {
      source: "#",
      demo: "https://ticketx.vn",
    },
  },
  {
    title: "HNC Mua",
    description:
      "A shopping application built with React Native, featuring API integrations and performance optimization for seamless user experience.",
    image: "/images/hncmua.png",
    tags: ["React Native", "API", "Performance", "E-commerce"],
    links: {
      source: "#",
      demo: "https://apps.apple.com/vn/app/hncmua/id1423442004",
    },
  },
  {
    title: "HNC Online",
    description:
      "An order management application developed with React Native, offering robust API integrations and advanced analytics features.",
    image: "/images/hnconline.png",
    tags: ["React Native", "API", "Analytics", "E-commerce"],
    links: {
      source: "#",
      demo: "https://apps.apple.com/vn/app/hnc-online/id1519375842",
    },
  },
  {
    title: "Coinhurt.com",
    description:
      "A comprehensive platform aggregating crypto market news and price tracking. Developed using NextJS, NodeJS, Python, and PostgreSQL.",
    image: "/images/coinhurt.png",
    tags: ["NextJS", "NodeJS", "Python", "PostgreSQL", "Crypto"],
    links: {
      source: "#",
      demo: "https://coinhurt.com",
    },
  },
  {
    title: "TicketX Checkin",
    description:
      "An event check-in application built with React Native, offering optimized performance and feature-rich functionalities.",
    image: "/images/ticketx-checkin.png",
    tags: ["React Native", "Event", "Performance", "API"],
    links: {
      source: "#",
      demo: "https://apps.apple.com/vn/app/ticketx-checkin/id6723885359",
    },
  },
  {
    title: "TicketX Connect",
    description:
      "A React Native application designed to connect and manage events efficiently, featuring API integration and high performance.",
    image: "/images/ticketx-connect.png",
    tags: ["React Native", "API", "Event", "Performance"],
    links: {
      source: "#",
      demo: "https://apps.apple.com/vn/app/ticketx-connect/id6737825650",
    },
  },
  {
    title: "React Native Fix Image",
    description:
      "An NPM package with ~1.5k weekly downloads, solving image processing challenges in React Native applications.",
    image: "/images/react-native-fix-image.png",
    tags: ["React Native", "NPM", "Image Processing", "Open Source"],
    links: {
      source: "https://www.npmjs.com/package/react-native-fix-image",
      demo: "https://www.npmjs.com/package/react-native-fix-image",
    },
  },
  {
    title: "Telegram Bot",
    description: "An automated bot that monitors messages from groups, and automatically aggregates them into 1 group.",
    image: "/images/telerelay.png",
    tags: ["Telegram", "Bot", "Finance", "Automation"],
    links: {
      source: "#",
      demo: "https://t.me/tele_relay",
    },
  },
  {
    title: "TSM Check Pro",
    description:
      "A Chrome extension for analyzing keywords on Facebook, supporting market research and data extraction.",
    image: "/images/tsmcheckpro.png",
    tags: ["Extension", "Facebook", "Market Analysis", "ReactJS"],
    links: {
      source: "#",
      demo: "https://chromewebstore.google.com/detail/tsm-check-pro/nmhnphklbfbfgcjfmgelafiacgkolade",
    },
  },
];

export default function ProjectsPage() {
  return (
    <div className='h-full bg-[#1E1E1E] relative overflow-hidden overflow-y-auto p-4 sm:p-8'>
      <h1 className='text-2xl sm:text-3xl text-white mb-6 sm:mb-8 font-mono'>Stuff I&apos;ve Built So Far</h1>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='border border-gray-800 rounded-lg overflow-hidden bg-[#252526] flex flex-col'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className='w-full object-fill h-40 sm:h-48 '
            />
            <div className='p-4'>
              <h3 className='text-lg sm:text-xl text-white mb-2 font-mono'>{project.title}</h3>
              <p className='text-xs sm:text-sm text-gray-400 mb-4'>{project.description}</p>

              <div className='flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4  '>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 rounded-full text-xs font-semibold border border-green-800'
                    style={{
                      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                        Math.random() * 255
                      }, 0.1)`,
                      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex gap-4'>
                <Link target='_blank' href={project.links.demo} className='text-[#FF9A8B] hover:underline text-sm'>
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
