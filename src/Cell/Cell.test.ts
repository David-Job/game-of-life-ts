import { Cell } from './Cell';
import { Boolean } from '../types/Boolean';

describe('cell should', () => {
  it('die by defaut', () => {
    let cell = new Cell(Boolean.False());
    ExpectToBeFalse(cell.isAlive());
  });

  function ExpectToBeFalse(b: Boolean) {
    expect(b.equals(Boolean.False())).toBeTruthy();
  }
});
