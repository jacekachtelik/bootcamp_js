// Operacje na użytkownikach
var User = require('./server');

const johny = new User({
    name: 'Johny',
    username: 'johny_bravo',
    password: 'aqq123'
});

const mary = new User({
    name: 'Mary',
    username: 'mary_sweet',
    password: '123qwe'
});

const ian = new User({
    name: 'Ian',
    username: 'Nai',
    password: 'Qaz123'
});

const findAllUsers = User.find({}, (function(err, res) {
    if (err) throw err;
    console.log('Actual database records are ' + res);
}));

const findSingleUser = User.find({ username: 'johny_bravo' }).exec(function(err, res) {
    if (err) throw err;
    console.log('Record you are looking for is ' + res);
});


const updadeUserPassword = function() {
    // update user password
    return User.findOne({ username: 'mary_sweet' })
        .then(function(user) {
            console.log('Old password is ' + user.password);
            console.log('Name ' + user.name);
            user.password = '123qaz';
            console.log('New password is ' + user.password);
            return user.save(function(err) {
                if (err) throw err;

                console.log('Uzytkownik ' + user.name + ' zostal pomyslnie zaktualizowany');
            })
        })
};

const updateUsername = function() {
    // update username
    return User.findOneAndUpdate({ username: 'johny_bravo' }, { username: 'johny_bravo_the_great' }, function(err, user) {
        if (err) throw err;

        console.log('Nazwa uzytkownika po aktualizacji to ' + user.username);
    })
};

const findIanAndDelete = function() {
    // find specific user and delete
    return User.findOne({ username: 'Nai' })
        .then(function(user) {
            return user.remove(function() {
                console.log('User successfully deleted');
            });
        })
};

// const findKennyAndDelete = function() {
//     // find specific user and delete
//     return User.findOne({ username: 'Kenny_the_boy' })
//         .then(function(user) {
//             return user.remove(function() {
//                 console.log('User successfully deleted');
//             });
//         });
// };

// const findBennyAndRemove = function() {
//     // find specific user and delete
//     return User.findOneAndRemove({ username: 'Benny_the_man' })
//         .then(function(user) {
//             return user.remove(function() {
//                 console.log('User successfully deleted');
//             });
//         });
// };

Promise.all([johny.save(), mary.save(), ian.save()])
    .then(findAllUsers)
    .then(findSingleUser)
    .then(updadeUserPassword)
    .then(updateUsername)
    .then(findIanAndDelete)
    // .then(findKennyAndDelete)
    // .then(findBennyAndRemove)
    .catch(console.log.bind(console))


// const query = User.find({});
// const promise = query.exec();
// promise.then(function(records) {
//     console.log('Actual database records are ' + records);
// });
// promise.catch(function(reason) {
//     console.log('Something went wrong: ', reason);
// });