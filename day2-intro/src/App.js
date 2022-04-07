
import './App.css';

function App() {
  var types = ["Andriod","Blackberry","iphone","Windows phone"]
  var company = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
        <h1>Mobile Operating System</h1>        
        {types.map((e) => {
              return <MobileOS types={e}/>
        })}
         
         <h1>Mobile Manufactures</h1> 
        {company.map((e) => {
              return <MobileM company={e}/>
        })}
    </div>
  );
}

function MobileOS(prop){
  return <li>{prop.types}</li>
}
function MobileM(prop){
  return <li>{prop.company}</li>
}
export default App;
