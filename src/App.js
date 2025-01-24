import './App.css';
import Topbanner from './components/Topbanner/Topbanner';
import Header from './components/Header/Header';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Topbanner></Topbanner>
      <Form></Form>   
    </div>
  );
}

export default App;
