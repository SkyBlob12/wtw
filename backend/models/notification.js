const mongoose = require('mongoose');

var notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, enum: ['read', 'unread'], default: 'unread' },
    createdAt: { type: Date, default: Date.now }
  });

const notificationModel = mongoose.model('notification', notificationSchema);
module.exports = notificationModel;
