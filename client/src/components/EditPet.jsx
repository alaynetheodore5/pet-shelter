import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkillOne] = useState("");
    const [skill_two, setSkillTwo] = useState("");
    const [skill_three, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});

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

    const UpdatePet = e => {
        e.preventDefault();
        const petItem = {name, type, description, skill_one, skill_two, skill_three};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, petItem)
            .then( res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={UpdatePet}>
                <h5 className="text-warning text-center">Edit {name}</h5>
                <div className="">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" onChange={e => setType(e.target.value)} value={type} />
                        {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" onChange={e => setDescription(e.target.value)} value={description} />
                        {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: "" }
                    </div>
                </div>
                <div className="">
                    <p className="text-center">Skills (optional):</p>
                    <div className="form-group">
                        <label>Skill 1</label>
                        <input type="text" className="form-control" onChange={e => setSkillOne(e.target.value)} value={skill_one}/>
                        {errors.skill_one ? <p className="text-danger">{errors.skill_one.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Skill 2</label>
                        <input type="text" className="form-control" onChange={e => setSkillTwo(e.target.value)} value={skill_two} />
                        {errors.skill_two ? <p className="text-danger">{errors.skill_two.properties.message}</p>: "" }
                    </div>
                    <div className="form-group">
                        <label>Skill 3</label>
                        <input type="text" className="form-control" onChange={e => setSkillThree(e.target.value)} value={skill_three} />
                        {errors.skill_three ? <p className="text-danger">{errors.skill_three.properties.message}</p>: "" }
                    </div>
                </div>
                <input type="submit" className="btn btn-warning btn-block" value="Edit Pet" />
            </form>
        </div>    
    )
}

export default EditPet;