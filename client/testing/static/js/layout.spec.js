// const { updateNav, updateMain, createNavLink, updateContent} = require('../../../static/js/layout')
// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8');

// global.fetch = require('jest-fetch-mock');
// let app;


// // it needs to do something before it tests
// describe('request', () => {
//     beforeEach(() => {
//         document.documentElement.innerHTML = html.toString();
//         app = require('../../../static/js/layout')
//     })
//     describe("update main function", () => {
//         it("should return 0", () => {
//         expect(updateMain('#register')).toBe(0);
//         });
//         describe('auth test', () => {
//     describe('mode helpers', () => {
//         beforeEach(() => {
//             document.documentElement.innerHTML = html.toString()
//         })
        
//         describe('Page loads', () => {
//             test('renderHomepage', () => {
//                 content.renderHomepage()
//                 const h3 = document.querySelector('h3')
//                 expect(h3.textContent).toBe("Benefits of tracking your sleep")
//             })
//             test('renderLoginForm', () => {
//                 content.renderLoginForm()
//                 const h3 = document.querySelector('h3')
//                 expect(h3.textContent).toBe('Login')
//             })
//             test('renderRegisterForm', () => {
//                 content.renderRegisterForm()
//                 const h3= document.querySelector('h3')
//                 expect(h3.textContent).toBe('Register for a free account')
//             })
//             test('renderFeed', async () => {
//                 await content.renderFeed()
//                 expect(fetch).toHaveBeenCalled()
//                 let options = {"body": "{\"username\":null}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
//                 expect(fetch).toHaveBeenCalledWith("http://localhost:3000/habits/fetchUsername", options)
//             })
//             test('renderProfile', async () => {
//                 await content.renderProfile()
//                 expect(fetch).toHaveBeenCalled()
//                 let options = {"body": "{\"username\":null}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
//                 expect(fetch).toHaveBeenCalledWith("http://localhost:3000/habits/fetchUsername", options)
//             })
//             test('updateSleepTime', async () => {
//                 await content.updateSleepTime()
//                 expect(fetch).toHaveBeenCalled()
//             })
//             test('updateSleepTarget', async () => {
//                 await content.updateSleepTarget()
//                 expect(fetch).toHaveBeenCalled()
//             })
//             test('Dashboard', () => {
//                 let postData = {
//                     "userid": 3,
//                     "sleeptarget": null,
//                     "sleepdate": [],
//                     "sleephours": []
//                     }
//                 let username = "username"
//                 content.Dashboard(postData, username)
//                 canvas = document.querySelector('#myChart')
//                 expect(canvas).toBeTruthy()
//             })
//             test('render404', () => {
//                 content.render404()
//                 let h2 = document.querySelector('h2')
//                 expect(h2.textContent).toBe("Oops, we can't find that page sorry!")
//             })
//         })
    
//     });

//     //it needs to do this after it tests each time.
//     afterEach(() => {
//         fetch.resetMocks();
//     })
// })

// /*
// TESTS WILL NOT RUN 

//     TypeError: Cannot read properties of null (reading 'addEventListener')

//        8 | window.addEventListener("hashchange", updateContent);
//        9 |
//     > 10 | modal.addEventListener("submit", createNewHabit);

//     ALSO AN ISSUE WITH LINE 13  'nav.innerHTML = ""; '
//          |       ^
// */

//     })
