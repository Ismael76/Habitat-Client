const { renderLoginForm, renderRegisterForm, renderHabitPage, renderHabitPageMenu, renderHabitItems, habitProgressBar, renderProfile, render404} = require('../../../static/js/content')
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;


// it needs to do something before it tests
describe('request', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../../../static/js/content')
    })


        describe('test renderLoginForm function', () => {
            test('test renderLoginForm function exists', () => {
                app.renderLoginForm()
                const form = document.querySelector('form')
                console.log('looking for this...',form)
                expect(renderLoginForm).toBeDefined()
                // expect(fields)
            })
        })

        describe('test renderRegisterForm function', () => {
            test('test renderRegisterForm function exists', () => {
                expect(renderRegisterForm).toBeDefined()
            })
        })

        describe('test renderHabitPage function', () => {
            test('test renderHabitPage function exists', () => {
                expect(renderHabitPage).toBeDefined()
            })
        })

        describe('test renderHabitPage function', () => {
            test('test renderHabitPage function exists', () => {
                expect(renderHabitPage).toBeDefined()
            })
        })

        describe('test renderHabit PageMenu function', () => {
            test('test renderHabitPageMenu function exists', () => {
                expect(renderHabitPageMenu).toBeDefined()
            })
        })

        describe('test renderHabitItems function', () => {
            test('test renderHabitItems function exists', () => {
                expect(renderHabitItems).toBeDefined()
            })
        })

        describe('test habitProgressBar function', () => {
            test('test habitProgressBar function exists', () => {
                expect(habitProgressBar).toBeDefined()
            })
        })

        describe('test render profile function', () => {
            test('render Profile function exists', () => {
                expect(renderProfile).toBeDefined()
            }) 
        })

        describe('test render404 function', () => {
            test('test render404 function exists', () => {
                expect(render404).toBeDefined()
            })
        })

    //it needs to do this after it tests each time.
    afterEach(() => {
        fetch.resetMocks();
    })
})
