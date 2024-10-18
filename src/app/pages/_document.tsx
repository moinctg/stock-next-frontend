import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
    <Head>
    <title>Cryptocurrency - Landing Page Template</title>
  <meta charSet="UTF-8" />
  <meta name="description" content="Cryptocurrency Landing Page Template" />
  <meta name="keywords" content="cryptocurrency, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="shortcut icon" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
  {/* Stylesheets */}
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="/assets/css/themify-icons.css" />
  <link rel="stylesheet" href="/assets/css/animate.css" />
  <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
  <link rel="stylesheet" href="/assets/css/style.css" />
  {/*[if lt IE 9]>
	  
	  
	<![endif]*/}


    </Head>
      <body>
        <Main />
        <NextScript />
 
        <script src="/assets/js/jquery-3.2.1.min.js"></script>
	<script src="/assets/js/owl.carousel.min.js"></script>
	<script src="/assets/js/main.js"></script>
      </body>
    </Html>
  )
}