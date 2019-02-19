const expect = require('expect');
const require = ('superfast');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post()
  });
});
