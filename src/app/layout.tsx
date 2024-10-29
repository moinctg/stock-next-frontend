"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "../css/satoshi.css";
import "../css//style.css";
import "../css/bootstrap.min.css";
import "../css/owl.carousel.css";
import "../css/responsive.css";
import "../css//animation.css"
import "../css/animate.min.css";
import "../css/font-awesome.min.css"
import "../css//slicknav.min.css";
import "../css/material-design-iconic-font.min.css";
import "../css/themify-icons.css";
import "../css/style1.css";




import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Head from  "next/head"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <Head>
          {/* Stylesheets */}
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="/assets/css/themify-icons.css" />
  <link rel="stylesheet" href="/assets/css/animate.css" />
  <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
  <link rel="stylesheet" href="/assets/css/style1.css" />
 

 <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
 <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

      </Head>
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}

  <script src="/assets/js/jquery-3.2.1.min.js"></script>
	<script src="/assets/js/owl.carousel.min.js"></script>
	<script src="/assets/js/main.js"></script>

      </body>
    </html>
  );
}
