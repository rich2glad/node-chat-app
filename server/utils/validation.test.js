var expect = require ('expect');
var {isRealString} = require('./validation');

describe('isRealString',()=>{

    it('should reject non string values',()=>{
        var strings=123;
        var message = isRealString(strings);
        expect(message).toBe(false);
    });

    it('should reject spaces',()=>{
        var message = isRealString('    ');
        expect(message).toBe(false);
    });

    it('should accept proper string',()=>{
        var message = isRealString(' fgdv ffg ');
        expect(message).toBe(true);
    });
});