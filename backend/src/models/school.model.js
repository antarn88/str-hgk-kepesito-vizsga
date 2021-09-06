const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  classrooms: {
    type: [String],
    ref: 'Classroom',
    required: false,
  },
}, {
});

module.exports = mongoose.model('School', SchoolSchema);
