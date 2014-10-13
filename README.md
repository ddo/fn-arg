fn-arg
======

handle optional function arguments

##installation

```bash
$ npm i fn-arg
```

##example

```js
var Args = require('fn-arg');

function i_handle_many_arguments(a, b, c, d, callback) {

    //set rules
    var args = Args({
        2: ['a', [Function: callback]],
        3: ['a', 'b', 'callback'],
        4: ['a', 'b', 'c', 'callback'],
        5: ['a', 'b', 'c', 'd', 'callback'] // require
    });

    //update the params
    a        = args.a;
    b        = args.b;
    c        = args.c;
    d        = args.d;
    callback = args.callback;

    console.log(args);
}

testing('a_val');
// => false

testing('a_val', function callback(){});
// => { a: 'a_val', callback: [Function: callback] }

testing('a_val', 'b_val', function callback(){});
// => { a: 'a_val', b: 'b_val', callback: [Function: callback] }

testing('a_val', 'b_val', 'c_val', function callback(){});
// => { a: 'a_val', b: 'b_val', c: 'c_val', callback: [Function: callback] }
```

##usage

* rules: ``object`` set the function rules, key is the number of the passing params. The missing rule will be return as ``false``