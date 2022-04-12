const assert = require('assert');
const tcHH   = require('../lib').default;

describe('Main module', function () {
    it('Call', function () {
        assert.equal(tcHH(), 6);
    });
});
