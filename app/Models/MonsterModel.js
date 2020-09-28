const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = Schema({
    name: String,
    hp:  Number,
    ac: Number,
    desc: String
});

const Monster = mongoose.model('Monster', MonsterSchema);

/// want this code to work:
exports.createMonster = (data) => {
    console.log(data);
    const monster = new Monster(data);
    return monster.save();
}


/// Ignore these methods:
exports.findById = (id) => {
    return Monster.findById(id)
}

exports.patchMonster = (id, monsterData) => {
    return Monster.findOneAndUpdate({
        _id: id
    }, monsterData);
}

module.exports = mongoose.model('MonsterModel', MonsterSchema);