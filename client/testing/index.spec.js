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


    // test('it has a different title when we click a button', () => {
    //     const btn = document.querySelector('button');
    //     btn.dispatchEvent(new dom.window.Event('click'))
    //     const h1 = document.querySelector('h1');
    //     expect(h1.innerHTML).toContain('you hit me')
    // })

    // test('it adds a specific title', () => {
    //     const form = document.querySelector('form');
    //     const h1 = document.querySelector('h1');

    //     const input = document.querySelector('#inputTitle');
    //     input.value='baby yoda'
    //     form.dispatchEvent(new dom.window.Event('submit'))
    
    //     expect(h1.innerHTML).toEqual('baby yoda')
    //     expect(input.value).toEqual('')
    // })
})
