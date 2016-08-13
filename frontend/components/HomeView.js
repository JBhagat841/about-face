import React from 'react';
import { Link } from 'react-router';

export const HomeView = () => (
  <div>
    <h1>Thing: a Heads Up! clone</h1>
    <Link to="/about">About</Link>
  </div>
);

export default HomeView;