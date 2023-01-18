import React from 'react';


export default function Logout() {
  sessionStorage.removeItem('token');
  window.location = '/';

  return(
    <div>Logout</div>
  )
}
