import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
