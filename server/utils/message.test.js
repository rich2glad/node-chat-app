var expect = require ('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage',()=>{

    it('should generate correct Message Object',()=>{
        var from="Jen";
        var text ="Some message";
        var message = generateMessage(from,text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateMessage',()=>{
    it('should generate correct location Object',()=>{
        var from='example@example.com';
        var lat=15;
        var long=19;
        var url='https://google.com/maps?q=15,19';
        var message = generateLocationMessage(from,lat,long);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
    });
});