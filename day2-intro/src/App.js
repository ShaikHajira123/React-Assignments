
import './App.css';

function App() {
  const data=[
    {
  heading :"Mobile Operating System",
  types : ["Andriod","Blackberry","iphone","Windows phone"]
    },
   {
    heading:"Mobile Manufactures",
  types:["Samsung","HTC","Micromax","Apple"]
   }
  ]
  return (
    <div className="App">
             
        {data.map((e) => (
               <MobileOS  head={e.heading} data={
               e.types.map((i)=>(
               <MobileOS data={i}/>
               ))}
              />
        
               ))}
         
        {/* // {company.map((e) => {
        //       return <MobileM company={e}/>
        // })} */}
    </div>
  );
}

function MobileOS({head ,data}){
  return(
    <div>
      <h1>{head}</h1>
      <li>{data}</li>
    </div>
  )
}
// function MobileM(prop){
//   return  <li>{prop.types}</li>
// }

export default App;
