const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

console.log(html)

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
//     afterEach(() => {
//     document.getElementsByTagName('html')[0].innerHTML = '';
//   });

    describe('HTML elements', () => {
        test('it has a body', () => {
            const body = document.querySelector('body')
            expect(body).toBeTruthy();

        });

        test('it has a div', () => {
            const div = document.getElementsByTagName('div')
            expect(div).toBeTruthy();
        });
        test('it has a form', () => {
            const form = document.getElementsByTagName('form')
            expect(form).toBeTruthy();
        });
        test('it has a header tag', () => {
            let h2 = document.getElementsByTagName('h2');
            expect(h2).toBeTruthy();
        })
        test('it has a span tag', () => {
            let span = document.getElementsByTagName('span');
            expect(span).toBeTruthy();
        });
        test('it has a paragraph tag', () => {
            let p = document.getElementsByTagName('p');
            expect(p).toBeTruthy();
        });
        test('it has a textarea tag', () => {
            let textarea = document.getElementsByTagName('textarea');
            expect(textarea).toBeTruthy();
        });
        test('it has an img tag', () => {
            let img = document.getElementsByTagName('img');
            expect(img).toBeTruthy();
        });
        test('it has a button', () => {
            let button = document.getElementsByTagName('button');
            expect(button).toBeTruthy();
        });
        test('it has an input', () => {
            let input = document.getElementsByTagName('input');
            expect(input).toBeTruthy();
        });
        test('It has a main section', () => {
            let main = document.getElementsByTagName('main');
            expect(main).toBeTruthy();
        });
        test('it has a script', () => {
            const script = document.getElementsByTagName('script')
            expect(script).toBeTruthy();
        });
        test('it has a title', () => {
            const title = document.getElementsByTagName('title')
            expect(title).toBeTruthy();
        });
        test('it has a nav', () => {
            const nav = document.getElementsByTagName('nav')
            expect(nav).toBeTruthy();
        });
    })
});
