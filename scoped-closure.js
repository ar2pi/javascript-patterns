var customObject = new CustomObject();
customObject.fire();
customObject.testClosure();

function CustomObject() {
  this.object = 'some encapsulated context';

  this.fire = function() {
    // will fire outside current scope
    unscopedClosure(testing, ['a', 'b'])();
    // thought binding on the closure was the problem ? think again
    unscopedClosure.bind(this)(testing, ['a', 'b']).apply();
    unscopedClosure.bind(this)(testing, ['a', 'b']).call();
    unscopedClosure.apply(this, [testing, ['a', 'b']])();
    unscopedClosure.call(this, testing, ['a', 'b'])();
    unscopedClosure.bind(this)(testing, ['a', 'b'])();
    // thought about overriding with your own methods ? hahaha nope
    unscopedClosure(this.local___testing, ['a', 'b'])();
    this.local___closure(this.local___testing, ['a', 'b'])();
    // scoping to current object would actually require either of these, prone to error
    unscopedClosure(testing, ['a', 'b']).bind(this).apply();
    unscopedClosure(testing, ['a', 'b']).bind(this).call();
    unscopedClosure(testing, ['a', 'b']).bind(this)();
    unscopedClosure(testing, ['a', 'b']).apply(this);
    unscopedClosure(testing, ['a', 'b']).call(this);
    console.log('==================================');
    // here, __scopedClosure lets you assign whichever context if need be, else just ommit it
    // + it's shorter to write ;)
    __scopedClosure(testing, ['a', 'b'], this)();
  };

  this.local___testing = function(a, b) {
    console.log(a, b);
    if (!!this.object) {
      console.log(this.object);
    } else {
      console.error('this.object is undefined!');
    }
  };
  this.local___closure = function(func, args) {
    return function() {
      func.apply(this, args)
    };
  };

  this.testClosure = __scopedClosure(testing, ['a', 'b'], this);
};

function unscopedClosure(func, args) {
  return function() {
    func.apply(this, args)
  };
};

function __scopedClosure(func, args, context) {
  return function() {
    context = context || this;
    func.apply(context, args)
  };
};

function testing(a, b) {
  console.log(a, b); // some args for proof of concept
  if (!!this.object) {
    console.log(this.object);
    // here be kittens and other essential stuff
  } else {
    console.error('this.object is undefined!');
    // no kittens, you've entered the void and exposed yourself to runtime dragons!
  }
};
