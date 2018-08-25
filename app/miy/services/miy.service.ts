import connection from "../../connections/config.connection";
import moment from 'moment';


var getbuah = function(callback:any) {
    connection.dbbuah.connect(function(err:any) {

        let query = `
            SELECT 
                nama, jumlah
            FROM
                data_buah
        `;

        connection.dbbuah.query(query, function (error:any, results:any, fields:any) {
            callback(results)
        });
    });
}

export default {
    getbuah
}