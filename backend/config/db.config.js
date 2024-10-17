const mongoose = require('mongoose');

const connection = () => {

    return (
        mongoose.connect('mongodb+srv://khdmohit00:pppppppp@cluster0.ctwzf1g.mongodb.net/Sells')
            .then(() => {
                console.log('MongoDB Connected')
            }).catch((error) => {
                console.log('Error');
            })
    )
}

module.exports = connection;