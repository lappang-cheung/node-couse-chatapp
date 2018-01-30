var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from  = 'Jen';
    var text = 'Hello World';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toEqual('number');
    expect(message).toInclude({from,text});
  });
});