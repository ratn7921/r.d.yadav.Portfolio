// "use client";

// import React, { useState } from 'react';
// import { assets } from '@/assets/assets';

// const Hireme = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "4d637aa0-c008-4a4e-a517-76ef9d89e40f");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   return (
//     <div
//       id="Hireme"
//       className='w-full px-[12%] py-10 scroll-mt-20 bg-cover bg-center'
//       style={{ backgroundImage: `url(${assets.header_bg_color})` }}
//     >
//       <h4 className='text-center text-5xl font-semibold text-black dark:text-white'>
//         My Portfolio
//       </h4>

//       <h2 className='text-center text-5xl font-bold mt-2 text-black dark:text-white'>
//         My Latest Work
//       </h2>

//       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300'>
//         Welcome to my portfolio! Here, you can explore a selection of my latest projects that showcase my skills and creativity. Each project reflects my dedication to quality and innovation. I hope you find inspiration in my work, and I look forward to the opportunity to collaborate with you on future endeavors.
//       </p>

//       <form className='max-w-2xl mx-auto'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
//           <input
//             type="text"
//             placeholder='Enter your name'
//             required
//             className='p-3 outline-none border border-gray-400 rounded-md bg-white text-black'
//           />
//           <input
//             type="email"
//             placeholder='Enter your email'
//             required
//             className='p-3 outline-none border border-gray-400 rounded-md bg-white text-black'
//           />
//         </div>
//         <textarea
//           rows='6'
//           placeholder='Enter your message'
//           required
//           className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white text-black mb-6'
//         ></textarea>

//         <button
//           type='submit'
//           className='py-3 px-8 flex items-center gap-2 bg-black bg-opacity-80 text-white rounded-full mx-auto hover:bg-black transition duration-500'
//         >
//           Submit Now
//           <img src={assets.hand_icon} alt="hand" className="w-6 h-6" />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Hireme;




"use client";

import React, { useState } from 'react';
import { assets } from '@/assets/assets';

const Hireme = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d637aa0-c008-4a4e-a517-76ef9d89e40f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="Hireme"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-cover bg-center'
      style={{ backgroundImage: `url(${assets.header_bg_color})` }}
    >
      <h4 className='text-center text-5xl font-semibold text-black dark:text-white'>
        My Portfolio
      </h4>

      <h2 className='text-center text-5xl font-bold mt-2 text-black dark:text-white'>
        My Latest Work
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300'>
        Welcome to my portfolio! Here, you can explore a selection of my latest projects that showcase my skills and creativity.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            required
            className='p-3 outline-none border border-gray-400 rounded-md bg-white text-black'
          />
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            required
            className='p-3 outline-none border border-gray-400 rounded-md bg-white text-black'
          />
        </div>
        <textarea
          name="message"
          rows='6'
          placeholder='Enter your message'
          required
          className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white text-black mb-6'
        ></textarea>

        <button
          type='submit'
          className='py-3 px-8 flex items-center gap-2 bg-black bg-opacity-80 text-white rounded-full mx-auto hover:bg-black transition duration-500'
        >
          Submit Now
          <img src={assets.hand_icon} alt="hand" className="w-6 h-6" />
        </button>

        <p className="text-center mt-4 text-green-600">{result}</p>
      </form>
    </div>
  );
};

export default Hireme;
