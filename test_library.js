// test framework library
var expect = {
    isTrue: function(value) {
        if (!value) {
            throw new Error("Assertion failed: " + value + " is not truthy");
        } else {
            console.log('test passed')
        }
    },

    isEmpty: function(input) {
        if (!input.length === 0) {
            throw new Error("Assertion failed: " + input + " is not empty");
        } else {
            console.log('test passed')
        }
    },

    toContain: function(input) {
        if (!input.length < 0) {
            throw new Error("Assertion failed: " + input + " is not empty");
        } else {
            console.log('test passed')
        }
    }
};