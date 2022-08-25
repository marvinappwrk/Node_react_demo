const db = require("../models");

const Tutorial = db.tutorials;
// console.log(Tutorial);
// Create and Save a new Tutorial
exports.create = (req, res) => {
    let reqtitle = req.body.title;
    let description = req.body.description;
    // return res.json({"data": reqtitle});
  
    if(description == ''|| reqtitle == ''){
      return res.json({error: 'missing values'});
    }
  
    const CreateTutorial = new Tutorial({title : reqtitle, description : description});
    CreateTutorial.save((err,data)=>{
      if(err){
        return res.json({error: err});
      }
      return res.json({"message":"New tutorial registered","id":data.id});
    });
    //check if id exists in database
    // Tutorial.findOne({}, (err,findData)=>{
    //     return res.json({"data": findData});
    //     if (findData == null){                                                                                                                                                                                                                                                                                                   
           
    //       //no user currently, make new
    //       const CreateTutorial = new Tutorial({title : reqtitle, description : description});
    //       CreateTutorial.save((err,data)=>{
    //         if(err){
    //           return res.json({error: 'hiiii'});
    //         }
    //         return res.json({"title":findData.title,"id":findData.id});
    //       });
    //     }else{
    //       //username taken, show their id
    //       return res.json({error:"This Tutorial is taken","id":findData.id});
    //     }
    //   });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // if (Tutorial == null){
    //       return res.json({"data":Tutorial,"message":"No,record found."});
    //   }else{
    //     //username taken, show their id
    //     return res.json({"data":Tutorial,"message":"Record found"});
    //   }
  return res.json({"data":Tutorial});
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
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
