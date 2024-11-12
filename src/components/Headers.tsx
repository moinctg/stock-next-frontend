// 'use client'
// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "../components/Navbar/Navbar";
// import { motion } from "framer-motion";

// const Headers = () => {
//   return (
//     <div className="relative overflow-hidden">
//       <div id="preloader" className="absolute inset-0 flex items-center justify-center bg-white z-50">
//         <div className="loader">Loading...</div>
//       </div>

//       <Navbar />

//       {/* Hero section */}
//       <section className="relative py-24 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//         {/* Animated background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 animate-gradient bg-[400%] z-0"></div>

//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative px-4">
//           {/* Hero Text */}
//           <div className="md:w-1/2">
//             <motion.h2
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               className="text-4xl md:text-5xl font-bold leading-tight mb-4"
//             >
//               Unlock the Power of <span className="text-yellow-300">Stock Market</span>
//             </motion.h2>

//             <motion.h4
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-lg md:text-xl mb-8 text-gray-200"
//             >
//               Leverage advanced AI models to forecast stock trends, make smarter
//               investment decisions, and stay ahead in the market.
//             </motion.h4>

//             <motion.form
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 1 }}
//               className="flex"
//             >
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="p-3 rounded-l-md text-gray-800 focus:outline-none"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-r-md font-medium hover:shadow-lg transition duration-300"
//               >
//                 Get Started
//               </motion.button>
//             </motion.form>
//           </div>

//           {/* Hero Image */}
//           <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src="/assets/img/laptop.png"
//                 width={1000}
//                 height={826}
//                 alt="Laptop"
//                 className="max-w-full h-auto"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <style jsx>
//         {`
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradientAnimation 10s ease infinite;
//         }

//         @keyframes gradientAnimation {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Headers;




// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "../components/Navbar/Navbar";
// import { motion } from "framer-motion";

// const Headers = () => {
//   return (
//     <div className="header-container">
//       <div id="preloder">
//         <div className="loader"></div>
//       </div>

//       <Navbar />

//       {/* Hero section */}
//       <section className="hero-section">
//         <div className="animated-bg"></div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 hero-text">
//               <motion.h2
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 Unlock the Power of <span>Stock Market </span> <br />
//               </motion.h2>

//               <motion.h4
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 1 }}
//               >
//                 Leverage advanced AI models to forecast stock trends, make smarter
//                 investment decisions, and stay ahead in the market.
//               </motion.h4>

//               <motion.form
//                 className="hero-subscribe-form"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1, duration: 1 }}
//               >
//                 <input type="text" placeholder="Enter your email" />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   className="site-btn sb-gradients"
//                 >
//                   Get Started
//                 </motion.button>
//               </motion.form>
//             </div>
//             <div className="col-md-6">
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Image
//                   src="/assets/img/laptop.png"
//                   width={1000}
//                   height={826}
//                   className="laptop-image"
//                   alt="Laptop"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>
        
//         {`
//         .header-container {
//           position: relative;
//           overflow: hidden;
//         }

//         /* Background animation */
//         .animated-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(45deg, #1c92d2, #f2fcfe);
//           background-size: 400% 400%;
//           animation: bgAnimation 15s ease infinite;
//           z-index: -1;
//         }

//         @keyframes bgAnimation {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .hero-section {
//           padding: 100px 0;
//           color: #fff;
//           text-align: left;
//           position: relative;
//         }

//         .hero-text h2 {
//           font-size: 48px;
//           font-weight: bold;
//         }

//         .hero-text h4 {
//           font-size: 18px;
//           margin-top: 10px;
//           color: #ddd;
//         }

//         .hero-subscribe-form {
//           display: flex;
//           margin-top: 20px;
//         }

//         .hero-subscribe-form input {
//           flex: 1;
//           padding: 12px;
//           font-size: 16px;
//           border: none;
//           border-radius: 4px 0 0 4px;
//         }

//         .site-btn {
//           padding: 12px 24px;
//           border-radius: 0 4px 4px 0;
//           cursor: pointer;
//           background: linear-gradient(90deg, #ff8a00, #e52e71);
//           border: none;
//           color: #fff;
//           transition: transform 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Headers;






















 import Link from "next/link"
 import Image from  "next/image"
import Navbar from '../components/Navbar/Navbar'

 const  Headers = () => {

    return(
<>

<div id="preloder">
		<div className="loader"></div>



  <Navbar/>



  <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h2>
              Unlock the Power of  <span>Stock Market </span> <br />
              
              </h2>
              <h4>Leverage advanced AI models to forecast stock trends, make smarter investment decisions, and stay ahead in the market</h4>
            
              <form className="hero-subscribe-from">
                <input type="text" placeholder="Enter your email" />
                <button className="site-btn sb-gradients">Get Started</button>
              </form>
            </div>
            <div className="col-md-6">
              <Image src="/assets/img/laptop.png" width={685} height={600} className="laptop-image" alt="Laptop" />
            </div>
          </div>
        </div>
      </section> 

      </div>
      </>
    )
 }
 export default Headers





    

