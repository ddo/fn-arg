module.exports = Args;

function Args(rules, args) {
    var fn_name = arguments.callee.caller.name;

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