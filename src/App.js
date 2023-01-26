import Navbar from "./Sections/Navbar";
import Footer from "./Sections/Footer";
import UserCard from "./Components/UserCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <UserCard />
      <Footer></Footer>
    </div>
  );
}

export default App;
