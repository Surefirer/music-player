//import style
import "./style/app.css";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
//import util
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
