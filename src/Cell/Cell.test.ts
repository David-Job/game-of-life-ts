import {Cell} from './Cell';
describe('cell should be', () => {
  it('die by defaut', () => {
    let cell = new Cell();

    expect(cell.isAlive()).toBe(false);
  });
});
