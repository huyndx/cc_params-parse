module.exports = function(){
    var args = process.argv;
    var result = {};
    for(var i = 0; i < args.length-1;i++){
        if(args[i].indexOf("-") === 0){
            result[args[i].substr(1)] = args[i+1];
        }
    }
    return result;
};
