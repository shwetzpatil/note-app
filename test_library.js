var expect = {
    isTrue: function(value) {
        if (!value) {
            throw new Error("Assertion failed: " + value + " is not truthy");
        } else {
            console.log('test passed')
        }
    }
};