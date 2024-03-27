const mongoose = require('mongoose');

var etablissementSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    openingHours: { type: String },
    photos: [{ type: String }],
    criters: [{ type: String }]
});

const etablissementModel = mongoose.model('etablissement', etablissementSchema);
module.exports = etablissementModel;
