// module.exports = mongoose => {
//  const Tutorial = new mongoose.model(
//    "tutorial",
//    mongoose.Schema(
//      {
//        title: String,
//        description: String,
//        published: Boolean
//      },
//      { timestamps: true }
//     )
//  );
//  return Tutorial;
// };

module.exports = mongoose => {
  var schema = new mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const {published,description,title, __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.title = title;
    object.description = description;
    object.published = published;
    return object;
  });


  const Tutorial = mongoose.model("Tutorial", schema);

    // Creating array of tutorial data object
    // const TutorialData = [{
    //   title: "TeacherX",
    //   description: "dfgdgf",
    //   published: true
    // },
    // {
    //   title: "TeacherY",
    //   description: "dsgfdgfd",
    //   published: true
    // }]
      
    // // Inserting course data
    // Tutorial.insertMany(TutorialData)
    //     .then(value => {
    //         console.log("Saved Successfully");
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
  
  return Tutorial;
};
