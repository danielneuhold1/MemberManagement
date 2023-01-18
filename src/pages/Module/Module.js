import React from 'react'
import { useParams } from 'react-router-dom';
import './Module.css'

const Module = () => {
  const { id } = useParams();

  return <div className="page-header">Module {id+1}</div>
};

export default Module;