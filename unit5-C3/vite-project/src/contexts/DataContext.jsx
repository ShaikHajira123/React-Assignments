import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
   const [employees, setEmployees] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/employee");
      fetched = await fetched.json();
      setEmployees([...employees, ...fetched]);
   };

   useEffect(() => {
      getData();
   }, []);

   const [data, setData] = useState({
      total: employees.length,
      terminated: 0,
      promoted: 0,
      total_new: 0,
   });

   const handleData = (state) => {
      setDatacon({ ...data });
   };

   return (
      <DataContext.Provider value={{ data, handleData }}>
         {children}
      </DataContext.Provider>
   );
};