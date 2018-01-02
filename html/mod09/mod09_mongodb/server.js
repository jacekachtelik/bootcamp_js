const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/nodeappdatabase', {
//     useMongoClient: true
// });

mongoose.connect('mongodb://mongodb_user_ja:123qwe@ds235827.mlab.com:35827/users' {
    useMongoClient: true
});


// Schemat nowego użytkownika
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});

// const User = mongoose.model('User',userSchema);

userSchema.methods.manify = function(next) {
    this.name = this.name + '-boy';
    return next(null, this.name);
}

userSchema.pre('save', function(next) {
    //pobranie aktualnego czasu
    const currentDate = new Date();

    //zmiana pola na aktualny czas
    this.updated_at = currentDate;

    if (!this.created_at) {
        this.created_at = currentDate;
    }

    // next() jest funkcją która przechodzi do następnego hooka do
    // wykonania przed lub po requeście
    next();
});

var User = mongoose.model('User',userSchema);
module.exports = User;

