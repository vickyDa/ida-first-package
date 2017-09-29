console.log('ida-first-package started');
//module.exports = 'myExport';
//module.exports = function(moduleArgument) {
//    console.log('moduleArgument is', moduleArgument);
//    return 'moduleResult';
//};

module.exports = function (base,exposant) {
    console.log('base  is '+base + " exposant is "+ exposant);
    this.base = base;
    this.exposant = exposant;
    return {
        pow: pow.bind(this)
    }
};

function pow() {
    return Math.pow(this.base, this.exposant) ;
}

