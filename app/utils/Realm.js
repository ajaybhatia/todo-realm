import Realm from 'realm';

class Person extends Realm.Object() {}

Person.schema = {
  name: 'Person',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string'
    },
  },
};

const realm = new Realm({
  schema: [Person],
});

export default realm;
