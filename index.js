const mongoose = require('mongoose');
const UsersMenu  =require('./models/usersMenu');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/usersMenu');

const db = mongoose.connection;

db.on('error', err=>{
    console.log('error connection', err)
});

db.once('open', ()=>{
    console.log('we are connected');
    const usersMenu = new UsersMenu({id: 1});
    console.log(usersMenu);
    // usersMenu.save((err, createdMenu)=>{
    //     console.log(err, createdMenu)
    // })
})