const expect = require('expect');

const {isRealString} = require('./validation');


describe('isRealString', () => {
  
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });
  
  it('should reject string with only spaces', () => {
    var res = isRealString('          ');
    expect(res).toBe(false);
  });

  it('should allow string non-space characters', () => {
    var res = isRealString('   Leo    ');
    expect(res).toBe(true);
  });

});