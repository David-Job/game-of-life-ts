import {Cell} from './Cell';
import { Boolean } from "../types/Boolean";

describe('cell should be', () => {
  it('die by defaut', () => {
    let cell = new Cell();

    ExpectToBeFalse(cell.isAlive());
  });

  function ExpectToBeFalse(b : Boolean){
    expect(b.equals(Boolean.False())).toBeTruthy();
  }
});
