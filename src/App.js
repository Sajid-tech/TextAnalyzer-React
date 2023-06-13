import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';

function App() {
  return (
    <>
    {/* <Navbar  title="TextAnalyzer" aboutText="About TextAnalyzer" /> */}
    <Navbar title="TextAnalyzer"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    </div>
   
    </>
    
  );
}

export default App;
