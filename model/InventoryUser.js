const mongoose = require('mongoose');

const InventoryUser = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        min: 6,
        max:255,
    },
    UUID: {
        type: String,
        required: true
    },
    inventory: {
        type: String,
        required: Array,
    },
});

module.exports = mongoose.model('InventoryUser', InventoryUser);