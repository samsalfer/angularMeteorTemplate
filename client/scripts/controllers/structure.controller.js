import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Structures} from '../../../lib/collections';


export default class StructureCtrl extends Controller {
  constructor() {
    super(...arguments);

    Meteor.subscribe('structures');
    this.helpers({
      data() {
        return Structures.find({});
      }
    });
  }


  createStructure() {
  if (_.isEmpty(this.newName)) return;

  this.callMethod('newStructure', {
    name: this.newName
  });

  delete this.newName;
  }

  deleteStructure(structure) {

  this.callMethod('removeStructure', structure._id);
  }
}

StructureCtrl.$name = 'StructureCtrl';
StructureCtrl.$inject = ['$stateParams'];
