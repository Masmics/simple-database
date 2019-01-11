const LetterEmitter = require('./letterEmitter.js');

describe('LetterEmitter', () => {
  let letterEmitter = null;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
  });

  it('splits a string');
  let countFn = jest.fn();
  const str = 'hello';

  letterEmitter.on('letter', countFn);

  letterEmitter.on('end', done => {
    expect(countFn).toHaveBeenCalledTimes(str.length);
    done();
  });
  letterEmitter.read(str);
});

