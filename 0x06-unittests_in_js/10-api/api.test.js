const request = require('request')
const {expect} = require('chai')
const { response } = require('express')

describe('Express App test', function () {
    it('should return 404 if id is not a number "/"', function (done) {
        request.get('http://localhost:7865/cart/favour', function (error, response, body) {
            expect(response.statusCode).to.be.equal(404)
            // expect(body).to.be.equal('Welcome to the payment system')
            done()
        })
    })
    it('should return 200 if id is a number', function (done) {
        request.get('http://localhost:7865/cart/2', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200)
            expect(body).to.be.equal('Payment methods for cart 2')
            done()
        })
    })
    it.only('should return 200 if id is a number', function (done) {
        request.get('http://localhost:7865/available_payments', function (error, response, body) {
            expect(response.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
})