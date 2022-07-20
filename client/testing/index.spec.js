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

})
