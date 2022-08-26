const db = require("../models");

const Tutorial = db.tutorials;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    let reqtitle = req.body.title;
    let description = req.body.description;
    let published =true;
  
    if(description == ''|| reqtitle == ''){
      return res.json({error: 'missing values'});
    }
  
    //check if id exists in database
    Tutorial.findOne({title:reqtitle}, (err,findData)=>{
      
        if (findData == null){                                                                                                                                                                                                                                                                                                              
          //no user currently, make new
          const CreateTutorial = new Tutorial({title : reqtitle, description : description, published : published});
          CreateTutorial.save((err,data)=>{
            if(err){
              return res.json({error: err});
            }
            return res.json({message:"New tutorial created.","data":data});
          });
        }else{
          //username taken, show their id
          return res.json({error:"This Tutorial is taken","id":findData.id});
        }
      });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Tutorial.find({}, (err,findData)=>{
    if (!err){                                                                                                                                                                                                                                                                                                   
      return res.json({"data": findData});
    }else{
      //username taken, show their id
      return res.json({error:err});
    }
  });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  let id = req.body.id;
  
    if(id == ''){
      return res.json({error: 'missing values'});
    }

  Tutorial.findOne({_id:id}, (err,findData)=>{

    if (findData == null){                                                                                                                                                                                                                                                                                                      
      //no user currently, make new
      const CreateTutorial = new Tutorial({title : reqtitle, description : description, published : published});
      CreateTutorial.save((err,data)=>{
        if(err){
          return res.json({error: err});
        }
        return res.json({message:"Tutorial listing","data":data});
      });
    }else{
      //username taken, show their id
      return res.json({error:"This Tutorial is taken","id":findData.id});
    }
  });
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
