import { Schema, Mongoose } from 'mongoose';
import { mongoose } from '../exports/mongoose';

const StudentSchema = new Schema({

    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    middlename: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 11,
        maxlength: 11
    },
    email: {
        required: false,
        type: String,
        trim: true,
        default: ''
    },
    address: {
        required: true,
        trim: true,
        type: String
    },
    ca: {
        type: Number,
        required: false,
        default: 0
    },
    courses: {
        type: [],
        required: true,
    },
    class: {
        type:String,
        required: true,
        trim: true
    },
    arm: {
        type: String,
        maxlength: 1,
        trim: true,
        required: true
    },
    sickness: {
        hasSickness: {
            type: Boolean,
            default: false
        },
        sicknessType: {
            type: String,
            default: '',
            trim: true,
        },
    
    },

    disabled: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        trim: true,
        minlength: 8,
    },
    dateCreated: {
        type: Date,
        trim: true,
        default: new Date().toLocaleDateString()
    }

});

export const studentModel = mongoose.model('Student', StudentSchema);

