const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
{
    title: {
        type: String,
        required: [true, 'Please add a title description']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    status: {
        type: String,
        enum: {  // to check value of status
            values: ['on-development', 'finished', 'cancelled', 'on-hold'],
            message: '{VALUE} no es un estado válido'
        },
        required: [true, 'Please add a project status']
    },
    visible: {
        type: Boolean,
        default: false
    },
    dateFinished: {
        type: Date,
        required: false
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Project', projectSchema)