//  import { Outfit, Ovo } from "next/font/google";
// // import { Great_Vibes, Dancing_Script, Pacifico, Satisfy } from "next/font/google";

// import "./globals.css";

// const outfit = Outfit ({
//   subsets: ["latin"],weight:[ "400", "500", "600", "700"],
// });

// const ovo = Ovo({
//   subsets: ["latin"],weight: ["400"],
// });
// // const greatVibes = Great_Vibes({
// //   subsets: ["latin"],
// //   weight: ["400"],
// // });

// // const dancingScript = Dancing_Script({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "600", "700"],
// // });


// export const metadata = {
//   title: "Portfolio- Ratnakar Yadav",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${outfit.className} ${ovo.className} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }




import { Outfit, Ovo, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Portfolio - Ratnakar Yadav",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} ${cinzelDecorative.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
