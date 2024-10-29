// components/sections/AboutSection.tsx
import Image from 'next/image';
import Link from "next/link";
import img from '../../../public/assets/img/about-img.png';
export default function AboutSection() {
    return (
      <section className="about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 about-text">
            <h2>Stock AI Inside Inc.</h2>
            <h5>We’re dedicated to empowering investors with the most reliable, data-driven insights into the stock market. In an era where information moves fast, our mission is to bring clarity and foresight to financial decision-making through advanced AI technology.</h5>
            <p>
              Bitcoin is one of the most important inventions in all of human history. For the first time ever,
              anyone can send or receive any amount of money with anyone else, anywhere on the planet,
              conveniently and without restriction. It’s the dawn of a better, more free world.
            </p>
            <h2>Our Mission</h2>
            <p>Our platform uses sophisticated machine learning models, including LSTM (Long Short-Term Memory) networks, to provide accurate, forward-looking predictions on stock trends. Designed for traders and investors alike, our app is built to handle the nuances of market behavior, delivering predictions that are both actionable and accessible</p>
            <h2>Why Choose Us?</h2>
            <p>Unlike traditional market analysis tools, our app focuses on the future. With customizable prediction periods and interactive reports, we put cutting-edge AI insights at your fingertips, tailored to the stocks that matter to you. Whether you’re planning for short-term gains or building a long-term investment strategy, we help you stay ahead of the market.</p>
            <a href="#" className="site-btn sb-gradients sbg-line mt-5">Get Started</a>
          </div>
        </div>
        <div className="about-img">
         <Image src={img} alt=""/>
        </div>
      </div>
    </section>
    );
  }
  