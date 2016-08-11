import jem from '../../src/JEM';

describe('jem', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(jem, 'greet');
      jem.greet();
    });

    it('should have been run once', () => {
      expect(jem.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(jem.greet).to.have.always.returned('hello');
    });
  });
});
