const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const NotificationSchema = new mongoose.Schema(
  {
    sender: {type: ObjectId, ref: 'User'},
    receiver: [{type: ObjectId, ref: 'User'}],
    message: {type: String},
    read_by: [{readerId: {type: ObjectId, ref: 'User'}, read_at: {type: Date, default: Date.now}}]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', NotificationSchema);