import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

// Automated Testing

describe('index.js', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  const setup = () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);

    const close = () => {
      return dom.window.close()
    };

    return {
      dom,
      close
    }
  };

  it('should have h1 that says Users', () => {
    const { dom, close } = setup();

    const h1Index = 0;

    const h1 = dom.window.document.getElementsByTagName('h1')[h1Index];

    expect(h1.innerHTML).to.equal('Users');

    close();
  });
});
