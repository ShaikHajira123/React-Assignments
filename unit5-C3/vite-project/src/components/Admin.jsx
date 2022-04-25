import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";

export const Admin = () => {
   const { isAuth } = useContext(AuthContext);
   const { handleData } = useContext(DataContext);

   const [form, setForm] = useState({
      employee_name: "",
      employee_id: "",
      title: "",
      salary: "",
      image: "",
      username: "",
      password: "",
      tasks: "",
      status: "",
      team: "",
   });

   const handleChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;

      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      handleData(1, "total_new");

      fetch("http://localhost:8080/employee", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(form),
      });
   };


    return (
      <form className="createEmployee"onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" name="employee_name" onChange={handleChange}/>
        <input type="text" placeholder="Employee id" name="employee_id"onChange={handleChange} />
        <select name="title"onChange={handleChange}>
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <input type="number" placeholder="Salary" name="salary" onChange={handleChange}/>
        <input type="text" placeholder="Image" name="image"onChange={handleChange} />
        <input type="text" placeholder="User Name" name="username"onChange={handleChange} />
        <input type="password" placeholder="Password" name="password"onChange={handleChange} />
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
          onChange={handleChange}
        />
        <select name="status" id="status"onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select>
        <select name="team" id="team" onChange={handleChange}>
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select>
        <input className="createUser" type="submit" value={"submit"} />
      </form>
    );
  };