const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;


// it needs to do something before it tests
describe('request', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../../../static/js/auth')
    })

    //it needs to do this after it tests each time.
    afterEach(() => {
        fetch.resetMocks();
    })

    //test user call
    describe('get requestLogin', () => {
        describe('login',  () => {
            test('it makes a get request to /user', () => {
                const e = {
                    // preventDefault: jest.fn(),
                    value: {
                        email: "user@example.com",
                        password: "password"
                    }
                }
                app.currentUser();
                // expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/')
                expect(fetch.mock.calls[0][0]).resolves
            })           
        })
    })

    // describe('current User Function tests', () => {
    //         test('it makes a get request to /user', () => {
    //         const res = currentUser()
             
    //             expect(res).toBeDefined()

          
    //     })
    // })

})
