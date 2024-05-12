var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:5000';

describe("API test suite", () => {
    describe("GET frontend site", ()=> {
        it("returns status code 200 and body lenght should be proper", function(done) {
            request.get(`http://frontend:3000`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(body.length).toBeGreaterThan(1000);
                done();
            });
        });
    });
    describe("GET /transactions", ()=> {
        it("returns status code 200 and proper number of transactions", function(done) {
            request.get(`${base_url}/transactions`, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(Object.keys(JSON.parse(body)).length).toBe(14);
                done();
            });
        });
    });
    describe("GET /transactions/averageValue", () => {
        it("return proper average transaction value", function(done) {
            request.get(`${base_url}/transactions/averageValue`, (error, response, body) => {
                expect(body).toBe(JSON.stringify(
                    {
                        avg: "53304.142857142857"
                    }));
                done();
            });
        });
    });
    describe("GET /transaction/:n", () => {
        it("should return selected n-th row", function(done) {
            request.get(`${base_url}/transaction/3`, (error, response, body) => {
                expect(body).toBe(JSON.stringify(
                    {
                        transaction_id: 3,
                        transaction_value: 65776
                    }));
                done();
            });
        });
    });
});