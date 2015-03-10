import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('contact', 'Contact Model', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('fullName', function(assert){
  var contact = this.subject({firstName: 'Damien', lastName: 'White'});
  assert.equal(contact.get('fullName'), 'Damien White');

  Ember.run(function() {
    contact.set('firstName', 'Dave');
  });

  assert.equal(contact.get('fullName'), 'Dave White');

  Ember.run(function() {
    contact.set('lastName', 'Marini');
  });

  assert.equal(contact.get('fullName'), 'Dave Marini');
});
