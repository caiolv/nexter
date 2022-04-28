import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Story from "./components/Story";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./styles/main.scss";

function App() {
  return (
    <body className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer/>
    </body>
  );
}

export default App;
