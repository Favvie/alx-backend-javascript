const request = require('request')
const {expect} = require('chai')

describe('Express App test', function () {
    it('should return welcome to payment on get "/"', function (done) {
        request.get('http://localhost:7865/', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Welcome to the payment system')
            done()
        })
    })
})