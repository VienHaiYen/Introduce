import './App.css';
import Content from'./component/Content';
// import Sidebar from'./component/Sidebar';
import UpButton from'./component/UpButton';
import './js/main'




function App() {
  return (
    <div className="App">
      <Content/>
      {/* <Sidebar/> */}
      <UpButton/>
    </div>
  );
}

export default App;
