function getPaymentTokenFromAPI(success) {
    if (success === true) {
        return new Promise.resolve({data: 'Successful response from the API' })
    }
}
module.exports = getPaymentTokenFromAPI