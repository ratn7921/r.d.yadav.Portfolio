
// 'use client';

// import { assets, infoList, toolsData } from '@/assets/assets';
// import Image from 'next/image';
// import React from 'react';

// const About = () => {
//   return (
//     <div id="about" className="relative w-full px-[12%] py-10 scroll-mt-20 overflow-hidden">

//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center filter blur-[10px] scale-110"
//         style={{ backgroundImage: `url(${assets.Background2.src})` }}
//         aria-hidden="true"
//       />

//       {/* Foreground Content */}
//       <div className="relative z-10">
//         <h4 className="text-center mb-2 text-lg font-cinzelDecorative text-black">Overview</h4>
//         <h2 className="text-center text-5xl font-cinzelDecorative text-black">About Me</h2>

//         <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-20">
//           {/* Profile Image */}
//           <div className="w-64 sm:w-80 rounded-3xl max-w-none">
//             <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl" />
//           </div>

//           {/* About Content */}
//           <div className="flex-1">
//             <p className="mb-10 max-w-2xl font-light text-black/90">
//               I’m Ratnakar Yadav, a Full Stack Developer with expertise in Java, Spring Boot, and React. 
//               I specialize in building scalable, performant web applications with clean UI and robust backend architectures.
//               Always exploring new tools, I aim to build meaningful projects that create impact.
//             </p>

//             {/* Key Info (can be achievements or education summary) */}
//             <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl">
//               {infoList.map(({ icon, iconDark, title, description }, index) => (
//                 <li
//                   key={index}
//                   className="flex flex-col items-center gap-4 p-6 bg-black/80 text-white rounded-lg shadow-lg transition-transform hover:scale-105 backdrop-blur"
//                 >
//                   <Image src={icon} alt={title} className="w-8 mt-3" />
//                   <h3 className="my-4 font-semibold">{title}</h3>
//                   <p className="text-sm text-center">{description}</p>
//                 </li>
//               ))}
//             </ul>

//             {/* Education Section */}
//             <h4 className="text-2xl font-semibold mb-6 text-center text-black mt-20">Education</h4>
//             <div className="space-y-4 text-center text-black/90">
//               <p>
//                 🎓 <strong>B.Tech in Computer Science</strong> — XYZ University (2020–2024)
//               </p>
//               <p>
//                 📚 Relevant Courses: Data Structures & Algorithms, Operating Systems, DBMS, Software Engineering
//               </p>
//               <p>
//                 🏆 Certifications in Full Stack Development, Machine Learning, and Cloud Computing
//               </p>
//             </div>

//             {/* Tools Section */}
//             <h4 className="text-2xl font-semibold mb-6 text-center text-black mt-20">Tech Stack</h4>

//             <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
//               {toolsData.map((tool, index) => (
//                 <li
//                   key={index}
//                   className="flex flex-col items-center justify-center p-5 bg-black/80 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 w-full max-w-[150px] text-white backdrop-blur"
//                 >
//                   <Image src={tool} alt={`tool-${index}`} className="w-10 h-10 object-contain mb-2" />
//                   <span className="text-sm">Tool {index + 1}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;





'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="relative w-full px-[12%] py-10 scroll-mt-20 overflow-hidden">

      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[10px] scale-110"
        style={{ backgroundImage: `url(${assets.Background2.src})` }}
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h4 className="mb-2 text-lg font-cinzelDecorative text-black">Overview</h4>
        <h2 className="text-5xl font-cinzelDecorative text-black mb-10">About Me</h2>

        {/* About Description */}
        <p className="mb-10 max-w-3xl font-light text-black/90">
          I’m <strong>Ratnakar Yadav</strong>, a Full Stack Developer with expertise in Java, Spring Boot, and React. 
          I specialize in building scalable, performant web applications with clean UI and robust backend architectures.
          Always exploring new tools, I aim to build meaningful projects that create impact.
        </p>

        {/* Info Cards Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoList.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 backdrop-blur"
            >
              <Image src={icon} alt={title} className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

      

        {/* Tools Section */}
        <h4 className="text-2xl font-semibold text-black mt-20 mb-6"></h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center max-w-5xl">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-transform hover:scale-105"
            >
              <Image src={tool} alt={tool.name} className="w-10 h-10 mb-2" />
              <p className="text-sm text-gray-800 dark:text-gray-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
