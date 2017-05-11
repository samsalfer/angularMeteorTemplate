import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Structures } from '../collections';


Meteor.methods({
  newStructure(newName) {
    const structureId = Structures.insert(newName);
    return structureId;
  },
  removeStructure(structureId) {
    Structures.remove(structureId);
  },

  'structure.edit' (structureId, setName){
    Structures.update(structureId, {
      name: setName
    });
  }
});
