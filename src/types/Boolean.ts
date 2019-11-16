
export class Boolean {

  static False(): Boolean{
    return new Boolean(false)
  };

  static True(): Boolean{
    return new Boolean(true)
  };

  equals(b: Boolean): boolean {
    return this.initialState === b.initialState;
  }

  initialState: boolean;

  private constructor(initialState: boolean) {
    this.initialState = initialState;
  }    
  
}


