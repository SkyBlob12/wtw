const mongoose = require('mongoose');

var sessionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    etablissementId: { type: Schema.Types.ObjectId, ref: 'etablissement', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  });

const sessionModel = mongoose.model('session', sessionSchema);
module.exports = sessionModel;
