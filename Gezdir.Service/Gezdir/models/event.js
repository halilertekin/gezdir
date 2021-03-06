﻿'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    constants = require('../resources/constants');

mongoose.Promise = require('bluebird');

var EventSchema = new Schema({
    guide: ObjectId,
    attendees: [ObjectId],
    creationDate: Date,
    expirationDate: Date,
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    eventType: String,
    quota: Number,
    name: String
}, { versionKey: false });

mongoose.model('Event', EventSchema, constants.collectionNames.Events);

module.exports = mongoose.model('Event');