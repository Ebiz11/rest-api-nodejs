import miyService from '../services/miy.service';
import {ibuah} from '../../interface/ibuah';
import moment from 'moment';

var get_data = function(callback:any){
    miyService.getbuah((res:ibuah[]) => {
        callback(res)        
    })
}

export default {
    get_data
}