import { Structures} from '../../lib/collections';

Meteor.startup(function () {
  if (Structures.find({}).fetch().length === 0) {

    var structures = [
      {name:'Structure 1'},
      {name:'Structure 2'}
    ];

    _.each(structures, function (structure) {
      console.log(structures);

      Structures.insert(structure);


    });
  }
});
