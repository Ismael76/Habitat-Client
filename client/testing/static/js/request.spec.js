const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;


// it needs to do something before it tests
describe('request', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../../../static/js/requests')
    })

    //it needs to do this after it tests each time.
    afterEach(() => {
        fetch.resetMocks();
    })

    describe('get all user requests', () => {
        describe('getUserHabits', () => {
            test('it makes a get request to /users', () => {
                app.getAllUsers();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch(/users$/)
            })           
        })
    })
    
})
