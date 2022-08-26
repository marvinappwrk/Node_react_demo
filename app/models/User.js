module.exports = mongoose => {
    var schema = new mongoose.Schema(
      {
        name: String,
        mobile_number: String,
        email: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const User = mongoose.model("User", schema);

    // Creating array of user data object
    // const UserData = [{
    //     name: "TeacherX",
    //     mobile_number: "91 9797242479",
    //     email: "test@test.com"
    // },
    // {
    //     name: "TeacherY",
    //     mobile_number: "+91 9697754164",
    //     email: "test@test.com"
    // }]
      
    // // Inserting course data
    // User.insertMany(UserData)
    //     .then(value => {
    //         console.log("Saved Successfully");
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    return User;
  };