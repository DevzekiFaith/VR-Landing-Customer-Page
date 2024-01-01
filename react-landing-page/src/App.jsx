import "./App.css";
import NavBar from "./Component/Header/NavBar/NavBar";
import Footer from "./Component/Main/Footer/Footer";
import Grid2 from "./Component/Main/Grid2/Grid2";
import Section2 from "./Component/Main/Section2/Section2";
import Section3 from "./Component/Main/Section3/Section3";
import Immersive from "./Component/Main/Section4/Immersive";

function App() {
  return (
    <div>
      <NavBar />
      <Section2 />
      <Section3 />
      <Immersive />
      <div>
        <Grid2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
