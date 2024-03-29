const Notification = require('../models/notification');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.notificationById = (req, res) => {
    let id = req.params.userId;
    Notification.findById(id).exec((err, notification) => {
    if (err || !notification) {
      return res.status(400).json({
        error: "Notification doesn't exist",
      });
    }
    res.json({ notification });
  });
};

exports.create = (req, res) => {
  let senderId = req.params.senderId;
  const notification = new Notification(req.body);
  notification.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};