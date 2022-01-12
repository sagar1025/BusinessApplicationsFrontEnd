import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return(
  <div className="container mt-5 text-center">
    <h1>Error 404 - Not Found!</h1>
    <Link to="/">Go back to Home</Link>
  </div>
  )
}