import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';
const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
  it('should pass', () => {
    expect(true).to.equal(true);
  });
  it('should pass', () => {
    expect(true).to.equal(true);
  });
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('usuarios.html', () => {
  it('should have h1 that says Usuarios', () => {
    const usuarios = fs.readFileSync(path.join(__dirname,'usuarios.html'), "utf-8");
    const dom = new JSDOM(usuarios);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Usuarios");
    dom.window.close();
  })
});
