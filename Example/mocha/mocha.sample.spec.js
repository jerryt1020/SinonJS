describe('Mocha hooks 執行流程', function() {

    before(function(){
        console.log("before all tests");
    });

    after(function(){
        console.log("after all tests");
    });

    beforeEach(function() {
        console.log("before each test");
    });

    afterEach(function() {
        console.log("after each test");
    });

    it('some test', function() {
        console.log("first test");
    });

    it('second test', function() {
        console.log("second test");
    });


});

/*

describe('Focus on test can be by "only"', function() {
    //TODO Include only this test in runner
    it('including test with "only"', function() {
        // ...
    });

    it('excluding test without "only"', function() {
        // ...
    });
});

describe('Skipping Tests', function() {
    //TODO Skip only this test in runner
    it('test is skipped when with "skip"', function() {
        // ...
    });
});*/
