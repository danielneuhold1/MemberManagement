import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './Course.css'

const Course = () => {
  const { id } = useParams();

  const units = [];
  
  for (let i = 0; i < 1; i++) {
    units.push(<tbody key={i}><tr><td>1. Einheit</td><td>09.02.2023</td>
    <td><Link to={`/courseUnit/${i}`}>Einheit {i+1}</Link></td>
    </tr></tbody>);
  }

  return <div><div className="page-header">Kurs {id+1}</div>
    <table><thead><tr><th>Name</th><th>Datum</th></tr></thead>
    {units}
    </table></div>;
};

export default Course;