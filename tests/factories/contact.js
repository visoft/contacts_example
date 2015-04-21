import FactoryGuy from 'factory-guy';

FactoryGuy.define('contact', {
  sequences: {
    name: function(num) {
      return 'User' + num;
    }
  },

  default: {
    firstName: FactoryGuy.generate('name'),
    lastName: 'Foo'
  }
});

export default {};