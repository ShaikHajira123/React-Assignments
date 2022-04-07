
import './App.css';

function App() {
  const logo = "LOGOBAKERY"
  const links = ["Services","Projects","About"]
  const button = "contact"
  return (
    <div className="App">
        <Logo logo={logo}/>
        <div id="p">
        {links.map((e)=>{
            return <Links links={e}/>
        })}
        </div>
       <Button button = {button} />
    </div>
  );
}

function Logo(prop){
  return <h5>{prop.logo}</h5>
}
function Links(prop){
  return <p>{prop.links}</p>
}
function Button(prop){
  return <button>{prop.button}</button>
}

export default App;
