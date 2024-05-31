import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '3s',
  };

export default function () {
  http.get('https://dev.indisell.com');
  sleep(1);
}