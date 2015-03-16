import Ember from 'ember';

export default Ember.ArrayController.extend({
  selectAll: false,

  actions: {
    toggleSelectAll: function() {
      this.set('selectAll', !this.get('selectAll'));
    }
  }
});
