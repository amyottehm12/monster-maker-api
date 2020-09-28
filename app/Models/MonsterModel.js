const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = Schema({
    name: String,
    hp:  Number,
    ac: Number,
    desc: String
});

// const Monster = mongoose.model('Monster', MonsterSchema);

// exports.createMonster = (monsterData) => {
//     console.log(monsterData);
//     const monster = new Monster(monsterData);
//     return monster.save();
// }

// exports.findById = (id) => {
//     return Monster.findById(id)
// }

// exports.patchMonster = (id, monsterData) => {
//     return Monster.findOneAndUpdate({
//         _id: id
//     }, monsterData);
// }

module.exports = mongoose.model('MonsterModel', MonsterSchema);