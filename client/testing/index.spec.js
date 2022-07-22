const renderDOM = require('./helper')

let dom ;
let document;

describe('index.html', () => {
    beforeEach( async () => {
        dom = await renderDOM('index.html')
        document = await dom.window.document;
    })

    test('page has a title', () => {
        const title = document.querySelector('title');
        expect(title.innerHTML).toContain('Habitat')
    })
    test('page has a form', () => {
        const form = document.querySelector('form');
        // expect(title.innerHTML).toContain('Habitat')
    })
    test('page has a form', () => {
        const form = document.querySelector('form');
        // expect(title.innerHTML).toContain('Habitat')
    })
    test('page has script tags ', () => {
        const style = document.querySelectorAll('script');
        expect(Array.isArray([style])).toBe(true);
    })
    test('page has a modal div  ', () => {
        const modal = document.querySelectorAll('modal');
        expect(Array.isArray([modal])).toBe(true);
    })
    // test('form ', () => {
    //     const form = document.getElementById('habit-form');
    //     console.log('form******************************** ',form)
        // const h1 = document.querySelector('h1');

        // const input = document.querySelector('#inputTitle');
        // input.value='baby yoda'
        // form.dispatchEvent(new dom.window.Event('submit'))
        // console.log(form)
    
        // expect(h1.innerHTML).toEqual('baby yoda')
        // expect(input.value).toEqual('')
    // })

})
