const { renderLoginForm, renderRegisterForm, renderHabitPage, renderHabitPageMenu, renderHabitItems, habitProgressBar, renderProfile, render404} = require('../../../static/js/content')


describe('test renderLoginForm function', () => {
    test('test renderLoginForm function exists', () => {
        expect(renderLoginForm).toBeDefined()
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

describe('test renderHabitPageMenu function', () => {
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
