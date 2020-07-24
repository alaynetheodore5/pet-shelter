import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import Display from './components/Display';
import PetForm from './components/PetForm';
import ViewPet from './components/ViewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-info text-light text-center">
        <h1>Pet Shelter</h1>
      </div>
      <Link className="btn btn-outline-info float-right" to="/">Home</Link>
      <Router className="my-5">
        <Display path="/" />
        <PetForm path="/new" />
        <ViewPet path="/view/:_id" />
        <EditPet path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
