import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Mywork from "@/components/Mywork";
import Hireme from "@/components/Hireme";
import Footer from '@/components/Footer';
// import { useEffect } from "react";
export default function Home() {

  // const [isDarkMode, setDarkMode] = useState(true);
  // useEffect(()=>{
  //   if(isDarkMode){
  //     document.documentElement.classList.add('dark')
  //   }
  // },[isDarkMode])
  return (
    <>
<Navbar/>
<Header/>
<About/>
<Services/>
<Mywork/>
<Hireme/>
<Footer/>
    </>
  );
}
