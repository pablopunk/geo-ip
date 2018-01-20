/* global describe, it */
const m = require('../src')
const assert = require('assert')

describe('service calls', function () {
  describe('with ip arguments', function () {
    it('return Netherlands nice country', function (done) {
      const result = m({JSONP: false, ip: '46.19.37.108'})
      assert.equal(result.country.en, 'Netherlands')
      assert.notEqual(result.country.en, 'France')
      done()
    })
  })
})
