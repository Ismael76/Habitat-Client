const { updateMain, createNavLink, updateContent} = require('../../../static/js/layout')
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
})

/*
TESTS WILL NOT RUN 

    TypeError: Cannot read properties of null (reading 'addEventListener')

       8 | window.addEventListener("hashchange", updateContent);
       9 |
    > 10 | modal.addEventListener("submit", createNewHabit);

    ALSO AN ISSUE WITH LINE 13  'nav.innerHTML = ""; '
         |       ^
*/

// describe("update main function", () => {
//     it("should return 0", () => {
//       expect(updateMain('#register')).toBe(0);
//     });
   
// });
