import "./App.css";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer"
import "./assets/css/style.css" 
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";


function App() {
  return (
    <>
      <Helmet>
        <title>Hello world</title>
      </Helmet>
      <Header/>
      <MainComponent/>
      <Footer/>
    </>
  );
}

export default App;
