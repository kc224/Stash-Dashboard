import "./App.css";
import Sidebar from './components/Sidebar/Sidebar';
import Mainbar from './components/Mainbar/Mainbar';
import Rightbar from './components/Rightbar/Rightbar';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <Mainbar></Mainbar>
        <Rightbar></Rightbar>
        
      </div>
    </div>
  );
}

export default App;