
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';

// const Header = () => {
//   return (
// <div className='relative  w-full min-h-screen flex items-center justify-center bg-cover bg-center text-center px-4 pt-0 mt-0 '
//       style={{
//         backgroundImage: `url(${assets.header_bg_color.src})`, // Make sure `header_bg_color` is imported image
//       }}
//     >
//       <div className='max-w-4xl mx-auto flex flex-col items-center mt-20 gap-4'>
//         <Image src={assets.profile_img} alt='Profile' className='rounded-full w-32 h-32 object-cover' />

//         <h3 className='flex items-center gap-2 text-xl md:text-2xl font-cinzelDecorative'>
//           Hello, I'm <span className='text-blue-600'>Ratnakar Yadav</span>
//           <Image src={assets.hand_icon} alt='hand' className='w-6 h-6' />
//         </h3>

//         <h1 className='text-3xl sm:text-5xl lg:text-6xl font-cinzelDecorative font-semibold leading-tight'>
//           Full Stack Java Developer <br /> based in India.
//         </h1>

//         <p className='text-base md:text-lg max-w-2xl font-cinzelDecorative'>
//           I am a Full Stack Developer with expertise in Java, Spring Boot, and React.
//           I create efficient and scalable web applications that deliver excellent user experiences,
//           combining robust back-end architecture with intuitive front-end design.
//         </p>

//         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//           <a
//             href="#contact"
//             className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition'
//           >
//             Contact Me
//             <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
//           </a>

//           <a
//             href="/ResumeofRatnakar.pdf"
//             download
//             className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition'
//           >
//             My Resume
//             <Image src={assets.download_icon} alt='Download' className='w-4' />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';

// const Header = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center text-center px-4 pt-0 mt-0 overflow-hidden">
      
//       {/* Blurred background image layer */}
//       <div
//         className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105 mt-100"
//         style={{ backgroundImage: `url(${assets.header_bg_color.src})` }}
//         aria-hidden="true"
//       />

//       {/* Content layer */}
//       <div className="relative max-w-4xl mx-auto flex flex-col items-center mt-20 gap-4">
//         <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32 h-32 object-cover" />

//         <h3 className="flex items-center gap-2 text-xl md:text-2xl font-cinzelDecorative">
//           Hello, I'm <span className="text-blue-600">Ratnakar Yadav</span>
//           <Image src={assets.hand_icon} alt="hand" className="w-6 h-6" />
//         </h3>

//         <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzelDecorative font-semibold leading-tight">
//           Full Stack Java Developer <br />
//         </h1>

//         <p className="text-base md:text-lg max-w-2xl font-cinzelDecorative">
//           I am a Full Stack Developer with expertise in Java, Spring Boot, and React.
//           I create efficient and scalable web applications that deliver excellent user experiences,
//           combining robust back-end architecture with intuitive front-end design.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
//           <a
//             href="#contact"
//             className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition"
//           >
//             Contact Me
//             <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
//           </a>

//           <a
//             href="/ResumeofRatnakar.pdf"
//             download
//             className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
//           >
//             My Resume
//             <Image src={assets.download_icon} alt="Download" className="w-4" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;





'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center px-4 pt-0 mt-0 overflow-hidden">
      
      {/* Blurred background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105 mt-100"
        style={{ backgroundImage: `url(${assets.header_bg_color.src})` }}
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center mt-20 gap-4">
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32 h-32 object-cover" />

        <h3 className="flex items-center gap-2 text-xl md:text-2xl font-cinzelDecorative">
          Hello, I'm <span className="text-blue-600">Ratnakar Yadav</span>
          <Image src={assets.hand_icon} alt="hand" className="w-6 h-6" />
        </h3>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzelDecorative font-semibold leading-tight">
          Full Stack Java Developer <br />
        </h1>

        <p className="text-base md:text-lg max-w-2xl font-cinzelDecorative">
          I am a Full Stack Developer with expertise in Java, Spring Boot, and React.
          I create efficient and scalable web applications that deliver excellent user experiences,
          combining robust back-end architecture with intuitive front-end design.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>

         <a
  href="https://drive.google.com/uc?export=download&id=1pYtyAfWU8jLdddf_YFD4QRWbehTfjPH5"
  download
  className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
>
  My Resume
  <Image src={assets.download_icon} alt="Download" className="w-4" />
</a>

        </div>
      </div>
    </div>
  );
};

export default Header;
