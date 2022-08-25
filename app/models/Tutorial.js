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
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Tutorial = mongoose.model("Tutorial", schema);
  return Tutorial;
};
