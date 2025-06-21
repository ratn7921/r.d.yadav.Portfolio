

// import React from 'react';

// const Mywork = () => {
//   return (
//     <div id="work" className="w-full min-h-screen text-gray-300 px-6 py-12 flex justify-center">
//       <div className="w-full max-w-6xl text-center">
//         <h2 className="text-4xl font-bold border-b-4 border-blue-600 inline-block mb-8">
//           Certificates 
//         </h2>

//         {/* Achievements Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
//           <ul className="list-disc list-inside space-y-3 text-gray-400 text-left mx-auto max-w-xl">
//             <li>🏆 Winner of XYZ Hackathon 2024</li>
//             <li>📜 Certified Java Developer from Oracle</li>
//             <li>🎖️ First place in National Coding Challenge</li>
//             <li>🚀 Published research paper on Web Performance Optimization</li>
//           </ul>
//         </section>

//         {/* Certificates Section */}
//         <section>
//           <h3 className="text-2xl font-semibold mb-6">Certificates</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//             {/* Card 1 */}
//             <div className="bg-[#112240] p-6 rounded-md shadow-md hover:shadow-blue-600 transition-shadow text-left">
//               <h4 className="font-semibold mb-2">Oracle Certified Java Programmer</h4>
//               <p className="text-sm text-gray-400">Issued by Oracle, 2023</p>
//               <a 
//                 href="https://example.com/certificate1" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-blue-500 hover:underline"
//               >
//                 View Certificate
//               </a>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-[#112240] p-6 rounded-md shadow-md hover:shadow-blue-600 transition-shadow text-left">
//               <h4 className="font-semibold mb-2">Full Stack Web Development</h4>
//               <p className="text-sm text-gray-400">Issued by Coursera, 2024</p>
//               <a 
//                 href="https://example.com/certificate2" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-blue-500 hover:underline"
//               >
//                 View Certificate
//               </a>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-[#30a760] p-6 rounded-md shadow-md hover:shadow-blue-600 transition-shadow text-left">
//               <h4 className="font-semibold mb-2">React Developer Certification</h4>
//               <p className="text-sm text-Black">Issued by Udemy, 2023</p>
//               <a 
//                 href="https://example.com/certificate3" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block text-blue-500 hover:underline"
//               >
//                 View Certificate
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Mywork;



import React from 'react';

const Mywork = () => {
  return (
    <div
      id="work"
      className="w-full min-h-screen px-6 py-12 flex justify-center items-start relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for darker tint */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-6xl text-center text-gray-900">
        <h2 className="text-4xl font-bold border-b-4 border-blue-800 inline-block mb-8 text-black">
          Certificates
        </h2>

        {/* Achievements Section */}
        <section className="mb-16 bg-white bg-opacity-20 backdrop-blur-md rounded-md p-6 max-w-xl mx-auto text-left shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-black">Achievements</h3>
          <ul className="list-disc list-inside space-y-3 text-black/90">
            <li>🏆 Winner of XYZ Hackathon 2024</li>
            <li>📜 Certified Java Developer from Oracle</li>
            <li>🎖️ First place in National Coding Challenge</li>
            <li>🚀 Published research paper on Web Performance Optimization</li>
          </ul>
        </section>

        {/* Certificates Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-black">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-md shadow-lg hover:shadow-blue-600 transition-shadow text-left max-w-sm">
              <h4 className="font-semibold mb-2 text-black">Oracle Certified Java Programmer</h4>
              <p className="text-sm text-black/90">Issued by Oracle, 2023</p>
              <a
                href="https://example.com/certificate1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-800 hover:underline"
              >
                View Certificate
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-md shadow-lg hover:shadow-blue-600 transition-shadow text-left max-w-sm">
              <h4 className="font-semibold mb-2 text-black">Full Stack Web Development</h4>
              <p className="text-sm text-black/90">Issued by Coursera, 2024</p>
              <a
                href="https://example.com/certificate2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-800 hover:underline"
              >
                View Certificate
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-md shadow-lg hover:shadow-blue-600 transition-shadow text-left max-w-sm">
              <h4 className="font-semibold mb-2 text-black">React Developer Certification</h4>
              <p className="text-sm text-black/90">Issued by Udemy, 2023</p>
              <a
                href="https://example.com/certificate3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-800 hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mywork;
