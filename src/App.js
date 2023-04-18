import logo from "./logo.svg";
import "./index.css";
// import Login from "./Component/Login";
// import Card from "./CardCompoent/Card";
import TrendingMovie from "./Screens/TrendingMovie";
import NewReleseMovie from "./Screens/NewReleseMovie";
// import Card3 from "./CardCompoent/Card3";
import NumberMovie from "./Screens/NumberMovie";
import Login from "./HomeComponent/Login";

function App() {
  return (
    <div className=" bg-black h-full w-screen ">
      <Login />
      <TrendingMovie />
      <NewReleseMovie />
      <NumberMovie />
      {/* <NewReleseMovie /> */}
    </div>
  );
}

export default App;
