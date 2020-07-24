import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const ViewPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkillOne] = useState("");
    const [skill_two, setSkillTwo] = useState("");
    const [skill_three, setSkillThree] = useState("");

    useEffect( () => {
        // console.log(props._id);
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then( res => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skill_one);
                setSkillTwo(res.data.skill_two);
                setSkillThree(res.data.skill_three);
            }).catch(errors => console.log(errors));
    }, [props._id]);
    
    const remove = () => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="row">
            <h5 className="col-sm-8 offset-sm-2 text-warning text-center">Details about {name}</h5>
            <div className="card col-sm-8 offset-sm-2">
                <div className="card-header bg-dark text-light"><h5>{name}</h5></div>
                <div className="card-body">
                    <p>Type: {type}</p>
                    <p>Description: {description}</p>
                    <p>Skills: {skill_one} {skill_two} {skill_three}
                    </p>
                    <button className="btn btn-success float-right" onClick={remove} >Adopt {name}</button>
                </div>
            </div>
        </div>
    )
}

export default ViewPet;