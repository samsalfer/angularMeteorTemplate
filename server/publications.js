import { Meteor } from 'meteor/meteor';
import { Structures } from '../lib/collections';



Meteor.publish('structures', function() {
  return Structures.find({});
});
