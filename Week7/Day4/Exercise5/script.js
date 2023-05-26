//option 2 is the correct choice because it properly calls the parent class's constructor 
//using super(name) and initializes the size property specific to the Labrador class.

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
