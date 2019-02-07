var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Test message'
    var message = generateMessage(from,text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe("number")
  })

})

describe('generateLocationMessage', () => {
    it('should generate correct location object', ()=>{
        var from = 'Jen';
        var latitude = 1;
        var longitude = 1;
        var message = generateLocationMessage(from,latitude,longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe("https://www.google.com/maps?q=1,1");
        expect(typeof message.createdAt).toBe("number")
    })
})
