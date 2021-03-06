import { receiveEntities } from '../actions/EntityTableServerActions';
import request from 'superagent';

export default {

  get: function(endpoint, data) {
  	  request.get('http://localhost/api/' + endpoint).query(data)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        
        receiveEntities(response.body);
      });
  }
};