import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';
export const options = {
    vus: 1,
    duration: '1s',
  };

  export default function () {

    const url =  'https://api.indisell.com/api/Accounts/SystemUser/Login';

const payload = JSON.stringify({

    email: 'syedumaya021@gmail.com',
    password: 'test@1234',
    role:'Customer',

});

const params={

    Headers:{
        'Content-Type':'application/json',
    },

};

   const res= http.post(url, payload, params);
    check(res,{

        'is status 200':(r) => r.status===200,
        'is res body has email':(r) => r.body.includes('syedumaya021@gmail.com'),
   });
  }