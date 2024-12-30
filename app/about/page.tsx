import { Code, Globe, MonitorSmartphone, Rocket, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <div className='h-full bg-[#1E1E1E] relative overflow-hidden overflow-y-auto'>
      {/* Thêm container cuộn */}
      <div
        className='max-w-6xl mx-auto space-y-6 sm:space-y-8 mt-4 '
        style={{ maxHeight: "80vh" }} // Giới hạn chiều cao và cho phép cuộn
      >
        <div className='flex items-center gap-2 text-xl sm:text-2xl text-white'>
          <Rocket className='text-[#FF9A8B]' />
          <h1> Fullstack Developer</h1>
          <Globe />
        </div>

        <p className='text-sm sm:text-base text-gray-300 leading-relaxed'>
          Greetings! I&apos;m Lưu Văn Huy, a seasoned Fullstack Developer with a passion for crafting efficient and
          impactful solutions across web and mobile platforms.
        </p>

        <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <Wrench className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            Over the past 5 years, I&apos;ve honed my skills in building scalable and user-friendly applications. My
            expertise lies in React, React Native, and Next.js on the frontend, enabling me to deliver seamless and
            interactive user experiences. From responsive web interfaces to dynamic mobile apps, I am committed to
            creating applications that resonate with end-users.
          </p>
        </div>

        <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <Code className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            On the backend, I leverage Python to build robust and efficient server-side solutions, ensuring smooth
            integration between frontend interfaces and backend systems. My focus on clean code and scalable
            architecture allows me to deliver reliable applications tailored to business needs.
          </p>
        </div>

        <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <MonitorSmartphone className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            Staying updated with the latest industry trends is my priority, ensuring that my solutions align with modern
            technologies and best practices. I’m particularly enthusiastic about exploring innovations in web
            development and mobile-first strategies.
          </p>
        </div>

        <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <Globe className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            Let’s collaborate to bring your ideas to life! Whether it’s creating polished user interfaces, developing
            full-stack solutions, or discussing new technologies, I’m ready to contribute my skills and expertise to
            your projects.
          </p>
        </div>

        <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <Rocket className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            Feel free to reach out for discussions about potential collaborations, innovative projects, or anything
            related to fullstack development. I look forward to connecting with like-minded professionals!
          </p>
        </div>

        {/* <div className='flex items-start gap-2 sm:gap-3 text-gray-300'>
          <MessageSquare className='mt-1 text-[#FF9A8B]' />
          <p className='leading-relaxed'>
            Feel free to reach out for discussions on innovative projects, potential collaborations, or anything related
            to blockchain development. Looking forward to connecting with like-minded professionals!
          </p>
        </div> */}
      </div>
    </div>
  );
}
