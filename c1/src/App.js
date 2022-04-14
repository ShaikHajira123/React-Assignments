import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

  function App() {
  
    const[score,setScore]=useState(76)
    const[wickets,setWicket]=useState(2)
    const [ball, setBall] = useState(50);
    const [over, setOver] = useState("8.2");
    const [btndisabled, setBtnDisabled] = useState(false);
    const handleScore = (value) => {
      if (score > 100) {
        setBtnDisabled(true);
        return;
      }
      setScore(score + value);
    };
    const handlewickets = (value) => {
      if (score > 100) {
        setBtnDisabled(true);
        return;
      }
      if (wickets >= 12) {
        return;
      }else{
        return setWicket(wickets+ value);
      }
      
    };
    const handleballs = (value) => {
      if (score > 100) {
        setBtnDisabled(true);
        return;
      }
      let over = Number.parseInt(ball / 6);
      let rem = ball - over * 6;
      setBall(ball + value);
      return setOver(`${over}.${rem}`);
    };

  
    return (
     
      <div className="App">
        <h3>India:</h3>
        <div className="banner">
          <div>
            Score:{"75"}
            <h1 className="scoreCount">
              {
               score
              }
            </h1>
          </div>
          <div>
            Wicket:{"2"}
            <h1 className="wicketCount">
              {
                wickets
              }
            </h1>
          </div>
  
          <div>
            Over:{"5"}
            <h1 className="overCount">
              {
                // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                // if 1 more ball is thrown then over is now 5.0
                // you have to write logic to form this string from current ball number.
                over
              }
            </h1>
          </div>
        </div>
  
        <div className="addScore">
          Add Score
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={()=>{handleScore(1)}}
          disabled={btndisabled?true:false}>Add 1</button>
          <button className="addScore4" onClick={()=>{handleScore(4)}}
           disabled={btndisabled?true:false}>Add 4</button>
          <button className="addScore6" onClick={()=>{handleScore(6)}}
           disabled={btndisabled?true:false}>Add 6</button>
        </div>
  
        <div className="addWicket">
          Add Wicket
          {/* Increase the count of wicket */}
          <button onClick={()=>{handlewickets(1)}}
           disabled={btndisabled?true:false}>Add 1 wicket</button>
        </div>
  
        <div className="addBall">
          Add ball
          {/* Increase the total number of balls thrown here. */}
          <button onClick={()=>{handleballs(1)}}
           disabled={btndisabled?true:false}>Add 1</button>
        </div>
     
          
          
  
           
          <h1 className="status">
            {score>100 ? "India Won":""}
            </h1> 
         
        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      </div>
    );
  }
  
  export default App;
