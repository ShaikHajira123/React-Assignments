import axios from 'axios'
import {useEffect,useState} from 'react'

import {useContext} from 'react'
import { DataContext } from '../contexts/DataContext';

export const Home = () => {
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created
    const[total,setTotal] = useState([])
    const getData = async () => {
        let fetched = await fetch("http://localhost:8080/employee");
        fetched = await fetched.json();
        setTotal([...fetched]);
     };
  
     useEffect(() => {
        getData();
     }, []);
     
    const { data } = useContext(DataContext);
    
  
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp">{total.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{data.terminated}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{data.promoted}</span>
          </div>
          <div>
            Total New: <span className="total_new">{data.total_new}</span>
          </div>
        </div>
      </>
    );
  };