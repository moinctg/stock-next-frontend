// import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import Head from 'next/head';

import React from "react";
import Headers from "@/components/Headers/Headers";
import Footer from "@/components/Footer/Footer";
import About from "./about/page";
import Contact from "./contact/page";
// import About from "@/components/About/intex"
// export const metadata: Metadata = {
//   title:
//     "Stock Market Admin  | NextAdmin - Next.js Dashboard Kit",
//   description: "This is stock market prediction system web app ",
// };

export default function Home() {
  return (
    <>
     
<div>
  <Headers/>
  <main>
    {/* <About/>
     */}
   <h2>this is landing page</h2>
  </main>
  <Footer/>
</div>
        
    </>
  );
}
