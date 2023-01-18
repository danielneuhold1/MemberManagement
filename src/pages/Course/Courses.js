import React from 'react'
import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
  const courses = [];
  
  for (let i = 0; i < 1; i++) {
    courses.push(<tbody key={i}><tr><td>Starter</td><td>Donnerstag</td><td>16:45</td><td>Strupi</td>
    <td><Link to={`/course/${i}`}>Kurse {i+1}</Link></td>
    </tr></tbody>);
  }

  return <div><div className="page-header">Meine Kurse</div>
      <table><thead><tr><th>Kurs</th><th>Kurstag</th><th>Zeit</th><th>Hund</th></tr></thead>
      {courses}
      </table></div>;
};

export default Courses;