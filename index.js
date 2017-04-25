function receivesAFunction(callback) {
	return callback();
};



function returnsANamedFunction() {
	return function imAFunction(){};
}

function returnsAnAnonymousFunction() {
	return function () {};
}