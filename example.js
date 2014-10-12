var Args = require('./');

testing('a_val');
testing('a_val', 'e_val');
testing('a_val', 'b_val', 'e_val');
testing('a_val', 'b_val', 'c_val', 'e_val');

function testing(a, b, c, d, e) {
    var args = Args({
        2: ['a', 'e'],
        3: ['a', 'b', 'e'],
        4: ['a', 'b', 'c', 'e']
    }, arguments);

    a = args.a;
    b = args.b;
    c = args.c;
    d = args.d;
    e = args.e;

    console.log(a, b, c, d, e);
}