var Args = require('./');

testing('a_val');
testing('a_val', function callback(){});
testing('a_val', 'b_val', function callback(){});
testing('a_val', 'b_val', 'c_val', function callback(){});

function testing(a, b, c, d, e) {
    var args = Args({
        2: ['a', 'e'],
        3: ['a', 'b', 'e'],
        4: ['a', 'b', 'c', 'e']
    });

    a = args.a;
    b = args.b;
    c = args.c;
    d = args.d;
    e = args.e;

    console.log(args);
    console.log(a, b, c, d, e);
}