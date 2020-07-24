console.log("pet.controller.js");

const Pet = require("../models/pet.model");

class PetController {
    create(req, res) {
        const newPet = new Pet(req.body);
        newPet.save()
            .then( () => res.json(newPet) )
            .catch( errors => res.json(errors) );
    }
    getAll(req,res) {
        Pet.find().sort("type")
            .then( pet => res.json(pet) )
            .catch( errors => res.json(errors) );
    }
    // get one
    getOne(req, res) {
        Pet.findOne( {_id: req.params._id} )
            .then( aPet => res.json(aPet) )
            .catch( errors => res.json(errors) );
    }
    // update
    update(req, res) {
        Pet.findByIdAndUpdate( {_id: req.params._id}, req.body, {runValidators: true} )
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    // remove
    remove(req, res) {
        Pet.findByIdAndRemove( {_id: req.params._id} )
        .then( () => res.json({msg: "ok"}) )
        .catch( errors => res.json(errors) );
    }
}

module.exports = new PetController();