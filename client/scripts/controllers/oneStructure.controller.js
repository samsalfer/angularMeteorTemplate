import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';

import { Structures} from '../../../lib/collections';



export default class OneStructureCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.structureId = this.$stateParams.structureId;
    Meteor.subscribe('structures');

    this.helpers({
      data() {
        return Structures.findOne(this.structureId);
      }
    });

  }

  editStructure(){

    this.callMethod('structure.edit', this.structureId, this.data.name);

  }
}

OneStructureCtrl.$name = 'OneStructureCtrl';
OneStructureCtrl.$inject = ['$stateParams'];
