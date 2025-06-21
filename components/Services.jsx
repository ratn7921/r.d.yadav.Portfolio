


import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { assets } from './../assets/assets';

const Services = () => {
  return (
    <div id="Services" className='w-full px-[12%] py-10 scroll-mt-20 overflow-hidden'>  
      <h4 className='text-center mb-2 text-lg font-cinzelDecorative'>
        Featured Work
      </h4>
        
      <h2 className='text-center text-5xl font-cinzelDecorative'>
        Projects
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-cinzelDecorative'>
        Explore some of the innovative projects I’ve built—from responsive websites to AI-powered platforms, combining functionality with creativity.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          // <div key={index}
          //   className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer transition-all duration-300 hover:scale-105 flex flex-col items-center text-center'
          // >
          //   <Image src={icon} alt='' className='w-10' />
          //   <h3 className='text-lg my-4 text-gray-700'>{title}</h3>

          //   <p className='text-sm text-gray-600 leading-5'> {description}</p>

          //   <a href={link} className='flex items-center gap-1 mt-3 text-blue-600 hover:underline'>
          //     Read more <Image src={assets.right_arrow} alt='' className='w-4' />
          //   </a>
          // </div>
          <div key={index}
  className="border border-gray-200 rounded-2xl px-8 py-10 hover:shadow-lg cursor-pointer transition-transform hover:scale-105 flex flex-col items-center bg-white text-center"
>
  <Image src={icon} alt={title} className="w-12 mb-4" />
  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
  <p className="text-sm text-gray-600 mt-2">{description}</p>
  <a href={link} className="flex items-center gap-1 mt-4 text-blue-500 hover:underline">
    Read more <Image src={assets.right_arrow} alt="arrow" className="w-4" />
  </a>
</div>

        ))}
      </div>
    </div>
  );
}

export default Services;




// import { serviceData } from '@/assets/assets';
// import Image from 'next/image';
// import React from 'react';
// import { assets } from './../assets/assets';

// const Services = () => {
//   return (
//     <div id="Services" className="w-full min-h-screen px-6 py-12 flex justify-center scroll-mt-20 overflow-hidden">
//       <div className="w-full max-w-6xl text-center">
//         <h4 className="mb-2 text-lg font-cinzelDecorative">Featured Work</h4>

//         <h2 className="text-5xl font-cinzelDecorative mb-5">Projects</h2>

//         <p className="max-w-2xl mx-auto mb-12 font-cinzelDecorative text-gray-700">
//           Explore some of the innovative projects I’ve built—from responsive websites to AI-powered platforms, combining functionality with creativity.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {serviceData.map(({ icon, title, description, link }, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-md hover:shadow-lg cursor-pointer transition-transform hover:scale-105 flex flex-col items-center text-center max-w-sm"
//             >
//               <Image src={icon} alt={title} className="w-12 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{description}</p>
//               <a href={link} className="flex items-center gap-1 mt-4 text-blue-600 hover:underline">
//                 Read more <Image src={assets.right_arrow} alt="arrow" className="w-4" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
