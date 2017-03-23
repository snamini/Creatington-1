// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema ({
    user_id: {
      type: String,
      required: true,
      unique: true,     
      trim: true
    },
    email: {
      type:String
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String
    }
});


// Make a Note model with the NoteSchema
var User = mongoose.model("User", UserSchema);
module.exports = User;

