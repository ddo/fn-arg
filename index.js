module.exports = Args;

function Args(rules) {
    var fn   = arguments.callee.caller;
    var args = arguments.callee.caller.arguments;

    var res = {};

    var rule = rules[args.length];

    if(!rule) {
        return false;
    }

    for(var i = 0; i < rule.length; i++) {
        res[rule[i]] = args[i];
    }

    return res;
}