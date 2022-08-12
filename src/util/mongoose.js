//for a list of objects
export const multipleMongooseToObject = function (mongooses) {
  return mongooses.map((mongoose) => mongoose.toObject());
};

//for a single object
export const mongooseToObject = function (mongoose) {
  return mongoose ? mongoose.toObject() : mongoose;
};
