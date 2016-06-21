import _ from 'lodash'; 
import { image , helpers} from 'faker'; 
import { Meteor } from 'meteor/meteor';
import {Employees} from '../imports/collections/employees'; 

Meteor.startup(() => {
  // code to run on server at startup
  //Check to see if data already exists in the collection
  //See if collection has any records
  const numberRecords = Employees.find({}).count();

  console.log(numberRecords); 

  if (!numberRecords){
    //generate some data.. 

    _.times(5000, () => {
        const {name, email, phone} = helpers.createCard();  

        Employees.insert({
          //if key are identical u can use the key only
          name,
          email,
          phone, 
          avatar: image.avatar()
        });
    }); 
  }

  Meteor.publish('employees', function(per_page){
    //.find({}) does not actually execute query to db
    //it only returns a cursor
    return Employees.find({}, { limit: per_page }); 
  }); 
});
