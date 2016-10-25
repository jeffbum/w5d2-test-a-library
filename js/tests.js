// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.one()', function() {
    it('should find one element using any CSS Selector', function() {
      expect(typeof md.one('div')).to.equal('object')
    })
  })
  describe('md.all()', function() {
    it('Find all matching elements using any CSS selector', function() {
      expect(md.all('.icon-bar').length).to.be.equal(3)
    })
  })
  //because I removed something, it should be undefined right?
  describe('md.remove()', function() {
    it('Remove an element', function() {
      md.remove('.icon-bar')
      expect(document.body.classList.contains('icon-bar')).to.be.false
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  //not sure why this one worked....
  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('body', 'placeholders')
      expect(document.body.classList.contains('placeholders')).to.be.false
    })
  })
  describe('md.hasClass()', function() {
    it('should return true if an element contains a CSS class in its CSS attribute', function() {
      expect(md.hasClass('body', 'jeff')).to.be.true
    })
  })
  describe('md.getAttr()', function() {
    it('Get an HTML attribute from an element', function() {
      expect(md.getAttr('button', 'data-toggle')).to.contain('collapse')
    })
  })
  describe('md.setAttr()', function() {
    it('Get an HTML attribute from an element', function() {
      md.setAttr('input', 'placeholder', 'My name is Jeff..')
      expect(md.getAttr('input', 'placeholder')).to.contain('My name is Jeff..')
    })
  })
  describe('md.getHTML()', function() {
    it('Get the innerHTML of an element', function() {
      expect(md.getHTML('.sr-only')).to.contain('Toggle navigation')
    })
  })
  describe('md.setHTML()', function() {
    it('Set the innerHTML of an element', function() {
      md.setHTML('.navbar-brand', 'Jeff\'s Page Now!')
      expect(md.getHTML('.navbar-brand')).to.contain('Jeff\'s Page Now!')
    })
  })
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        // add your setup code here
        md.flipPage('body')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
  })
})
