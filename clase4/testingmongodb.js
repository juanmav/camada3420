const MongoClient = require('mongodb');
const ObjectID = MongoClient.ObjectID;

MongoClient.connect('mongodb://localhost:27017/camada3420', function (err, db) {

    if(err){
        console.log('exploto algo!');
        throw err;
    } else {

        /*let user = {
            username: 'pedrito',
            mail: 'p@aaa.com',
            password: 'Password1!'
        };

        db.collection('Users')
            .insertOne(user, function(err, result){
                console.log(result);
                db.close();
            })//*/

        /*db.collection('Users')
            .find({username : 'pedrito'})
            .toArray(function(err, users){
                console.log(users);
                db.close();
            })*/


        /*let o_id = new ObjectID('5bc90b766877d121c3d2a87d');

        db.collection('Users')
            .deleteOne({ _id: o_id }, function(err, result){
                console.log('Borrado!');
                console.log(result);
                db.close();
            })*/

        /*let o_id = new ObjectID('5bc90e787980d1240438b7e7'); // judas
        let nuevosDatos = {
            username: 'judas',
            mail: 'judaas@aaasdasda.com',
            password: 'AmoAJesus10!'
        };

        db.collection('Users').
        updateOne(
            { _id: o_id },
            { $set: nuevosDatos },
            function (err, result) {
                console.log(result);
            })*/

    }

});