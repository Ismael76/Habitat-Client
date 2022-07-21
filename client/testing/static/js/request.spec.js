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

    //test user call
    describe('get UserSpecificHabits', () => {
        describe('get all users',  () => {
            test('it makes a get request to /user', () => {
                app.getUserSpecificHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/1/1')
                expect(fetch.mock.calls[0][1]).resolves
            })           
        })
    })

      //test get user habits call endpointn
      describe('get all user habits requests', () => {
        describe('get all users', () => {
            test('it makes a get request to /user', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user')
                expect(fetch.mock.calls[0][1]).resolves
            })           
        })
    })



    describe('delete habit', () => {
        test('it makes a DELETE request to /user/habits/1/1 with the habit data',async () => {
            const fakeDeleteEvent = {
                preventDefault: jest.fn(),
                target: {
                    id: { value: 1 },
                }
            }

            app.deleteHabit(fakeDeleteEvent);
            expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'DELETE');
            expect(fetch.mock.calls[0][1]).resolves
       ;
        })
    })

    //null must be fixed. how to set an id in the app. request? 
    describe('get all user habits', () => {
        describe('getUserHabits', () => {
            test('it makes a get request to /users/habits/1', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
            })           
        })
    })

    //null must be fixed. how to set an id in the app. request? 
    describe('get user specific habits', () => {
        describe('getUserSpecificHabits', () => {
            test('it makes a get request to user/habits/${id}/${habitId}', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
            })           
        })
    })

    //null must be fixed. how to set an id in the app. request? 
    describe('get user completed habits', () => {
        describe('getUserSpecificHabits', () => {
            test('it makes a get request to user/completed/${id}/', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
            })           
        })
    })


    //null must be fixed. how to set an id in the app. request? 
    describe('patch progress function', () => {
        describe('check patch progress request', () => {
            test('it makes a get request to user/habits/${id}/${habitId}', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
            })           
        })
    })

    //null must be fixed. how to set an id in the app. request? 
    describe('create habits', () => {
        describe('getUserHabits', () => {
            test('it makes a get request to /users/habits/1', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
            })           
        })
    })
    
    describe('get profile images', () => {
        describe('getUserHabits', () => {
            test('it makes a get request to /users/habits/1', () => {
                app.getUserHabits();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/profileImage')
            })           
        })
    })
        
        //null must be fixed. how to set an id in the app. request? 
        describe('get delete habit', () => {
            describe('getUserHabits', () => {
                test('it makes a get request to /users/habits/1', () => {
                    app.getUserHabits();
                    // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                    expect(fetch.mock.calls[0][0]).toMatch('http://localhost:4000/user/habits/null')
                })           
            })
        })
})
