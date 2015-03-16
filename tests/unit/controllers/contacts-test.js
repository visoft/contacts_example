import {
  moduleFor,
  test
} from 'ember-qunit';

import { QUnit, assert } from 'qunit';
import Ember from 'ember';

moduleFor('controller:contacts', 'Contacts Controller', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('it is an ArrayController', function(assert) {
  var controller = this.subject();
  assert.ok(controller.addObject, 'Expected addObject method to exist');
});

test('calling the action toggleSelectAll updates selectAll' ,function(assert) {
  assert.expect(3);

  var controller = this.subject();

  // check the value before calling the action
  assert.equal(controller.get('selectAll'), false);

  // now call the action
  controller.send('toggleSelectAll');

  // Check the new value
  assert.equal(controller.get('selectAll'), true);

  // call the action again
  controller.send('toggleSelectAll');

  // we should be back to false
  assert.equal(controller.get('selectAll'), false);
});
