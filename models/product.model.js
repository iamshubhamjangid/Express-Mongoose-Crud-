const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpSchema = new Schema({
    name : {type : String , required: true, max: 100},
    emp_id :{type :Number , required: true, maxlength:6},
    company : {type : String , required: true, max: 100}
},{
    versionKey: false // You should be aware of the outcome after set to false
}) 
// mongoose.connection.on('open', function (ref) {
//     console.log('Connected to mongo server.');
//     //trying to get collection names
//     mongoose.connection.db.listCollections().toArray(function (err, names) {
//         console.log(names); // [{ name: 'dbname.myCollection' }]
//         module.exports.Collection = names;
//     });
// })

var Employ = mongoose.model('Employee', EmpSchema,'Employee');
module.exports = Employ