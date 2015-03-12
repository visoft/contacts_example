import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleFor('route:contacts', 'Contacts Route', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('it returns a list of contacts', function(assert) {
  var store = {
    find: function(type) {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve([
          {id: 1, firstName: 'Damien', lastName: 'White'},
          {id: 2, firstName: 'Dave', lastName: 'Marini'}
        ]);
      });
    }
  };
  var route = this.subject();
  route.set('store', store);
  assert.deepEqual(route.model()._result, [
    {id: 1, firstName: 'Damien', lastName: 'White'},
    {id: 2, firstName: 'Dave', lastName: 'Marini'}
  ]);
});