const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },

        album: {
            type: Number,
        },

        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true
                },
                message: "ERROR_URL"
            },
        },

        artist: {

            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },

        duration: {
            stark: {
                type: Number
            },
            end: {
                type: Number
            },
        },

        mediaId: {
            type: mongoose.Types.objectId,
        },
    },

    {

        timestamps: true, // CreatedAd, UpdatedAt
        versionKey: false,
    }

);

module.exports = mongoose.model("tracks", TracksScheme);