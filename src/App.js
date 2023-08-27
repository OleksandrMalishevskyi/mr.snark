import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import DemoVideo from "./components/demoVideo/DemoVideo";
import Partners from "./components/partners/Partners";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import {useState} from "react";

function App() {

  const [isActiveVideo, setIsActiveVideo] = useState(false);

  return (
    <div className={isActiveVideo ? "App no-scroll" : "App"}>
      <Header />

        <main>
          <Banner isActiveVideo={isActiveVideo} setIsActiveVideo={setIsActiveVideo}/>
          <DemoVideo />
          <Partners />
          <Features />
          <Testimonials />
          <FAQ />
          <Download />
        </main>

      <Footer />
    </div>
  );
}

export default App;
