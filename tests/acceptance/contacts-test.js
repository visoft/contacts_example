import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'contacts/tests/helpers/start-app';
import { testMixin as FactoryGuyTestMixin } from 'factory-guy';
import contactFactory from '../factories/contact';
import FactoryGuy from 'factory-guy';

var application;
var TestHelper = Ember.Object.createWithMixins(FactoryGuyTestMixin);
var testHelper;

module('Acceptance: Contacts', {
  beforeEach: function() {
    application = startApp();
    testHelper = TestHelper.setup(application);
  },

  afterEach: function() {
    Ember.run(function() { testHelper.teardown(); });
    Ember.run(application, 'destroy');
  }
});

test('visiting /contacts', function(assert) {
  testHelper.handleFindAll('contact', 2);
  visit('/contacts');

  andThen(function() {
    assert.equal(currentPath(), 'contacts');
  });
});

test('contacts should be listed on the page', function(assert) {
  assert.expect(1);
  testHelper.handleFindAll('contact', 2);
  visit('/contacts');

  andThen(function() {
    assert.equal(find('.contact').length, 2);
  });
});

test('contacts should have their name listed on the page', function(assert) {
  assert.expect(1);
  var contact = FactoryGuy.make('contact', {firstName: 'Damien', lastName: 'White'});
  testHelper.handleFindAll('contact', 1, [contact]);
  visit('/contacts');

  andThen(function() {
    assert.equal(find('.contact:first').text(), 'Damien White');
  });
});

