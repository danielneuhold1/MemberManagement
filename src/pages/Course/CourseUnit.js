import React from 'react'
import { useParams } from 'react-router-dom';
import './CourseUnit.css'

const CourseUnit = () => {
  const { id } = useParams();

  return <div className="page-header">Einheit {id+1}</div>
};

export default CourseUnit;