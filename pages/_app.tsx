import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../src/components/Top";
import Footer from "../src/components/Footer";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 앱다음에 index호출 페이지와 컴포넌트차이 */}
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
