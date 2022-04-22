
 export const Tablebody = (d) => {

return(
    <tr className="row" >
    <td className="first_name">{d.student.first_name}</td>
    <td className="last_name">{d.student.last_name}</td>
    <td className="email">{d.student.email}</td>
    <td className="gender">{d.student.gender}</td>
    <td className="age">{d.student.age}</td>
    <td className="tenth_score">{d.student.tenth_score}</td>
    <td className="twelth_score">{d.student.twelth_score}</td>
    <td className="preferred_branch">{d.student.preferred_branch}</td>
  </tr>

    
)
}