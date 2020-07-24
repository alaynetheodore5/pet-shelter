import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {
    
    const [pets, setPets] = useState([]);

    const fetchPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res);
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchPets();
    }, []);

    return (
        <div>
            <h5 className="text-warning text-center">These pets are looking for a good home!</h5>
            <Link className="btn btn-warning float-right btn-lg mb-2" to="/new">add a pet to the shelter!</Link>
            <table className="table col-sm-6 offset-sm-2">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th className="text-center"scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
            {pets.map( (p, i) => 
                <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>
                        <Link className="btn btn-outline-info ml-5" to={`/view/${p._id}`} >VIEW</Link>
                        <Link className="btn btn-outline-warning ml-1" to={`/edit/${p._id}`} >EDIT</Link>
                    </td>
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Display;