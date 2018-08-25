import connection from "../../connections/config.connection";
import moment from 'moment';


var getbuah = function(callback:any) {
    connection.dbbuah.connect(function(err:any) {

        let query = `
            SELECT 
                *
            FROM
                data_buah
        `;

        connection.dbbuah.query(query, function (error:any, results:any, fields:any) {
            callback(results)
        });
    });
}

var deletebuah = function(id:number, callback:any) {
    connection.dbbuah.connect(function(err:any) {

        let query = `DELETE FROM data_buah WHERE buah_id = `+id;
        
        connection.dbbuah.query(query, function (error:any, results:any, fields:any) {
            callback(results)
        });
    });
}

export default {
    getbuah,
    deletebuah
}