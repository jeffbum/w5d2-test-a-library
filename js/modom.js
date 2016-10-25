(function(){
    'use strict'

    // one(): Find one matching element using any CSS selector
    var one = function(selector) {
        return document.querySelector(selector)
    }
    // all(): Find all matching elements using any CSS selector
    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    // remove(): Remove an element
    var remove = function(selector) {
        one(selector).remove()
    }

    // addClass(): Add a CSS class to an element
    var addClass = function(selector, className) {
        one(selector).classList.add(className)
    }

    // removeClass(): Remove a CSS class from an element
    var removeClass = function(selector, className) {
        one(selector).classList.remove(className)
    }

    // hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var hasClass = function(selector, className) {
        var jeff = one(selector).classList.contains(className)
        return jeff
    }

    // getAttr(): Get an HTML attribute from an element
    var getAttr = function(selector, attribute) {
        return one(selector).getAttribute(attribute)
    }

    // setAttr(): Set an HTML attribute on an element
    var setAttr = function(selector, attribute, value) {
        one(selector).setAttribute(attribute, value)
    }

    // getHTML(): Get the innerHTML of an element
    var getHTML = function(selector) {
        return one(selector).innerHTML
    }

    // setHTML(): Set the innerHTML of an element
    var setHTML = function(selector, value) {
        one(selector).innerHTML = value
    }

    //flipPage() should flip the page upside down
    var flipPage = function(selector) {
        one(selector).style.transform = 'rotate(180deg)'
    }

    // Add an ajax() function that fetches API data.
    var ajax = function(url, successCallback) {
        fetch(url)
        .then(res => res.json())
        .then(successCallback)
    }

    // Add a getProp() function that gets an element's object property value.
    var getProp = function(selector, property) {
        return one(selector)[property]
    }
    // Add a setProp() function that sets an element's object property value.
    var setProp = function(selector, property, value) {
        one(selector)[property] = value
    }

    // Add a getValue() function that sets an form field's value attribute.
    var getValue = function(selector) {
        return one(selector).value
    }

    // Add a setValue() function that sets an form field's value attribute.
    var setValue = function(selector, stringValue) {
        one(selector).value = stringValue
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        getHTML: getHTML,
        setHTML: setHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,
        flipPage: flipPage,
    }

}())
