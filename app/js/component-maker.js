module.exports = function (template, name) {
    var template = document.querySelector('#' + template);
    // Create a prototype for a new element that extends HTMLElement
    var proto = Object.create(HTMLElement.prototype);

    // Setup our Shadow DOM and clone the template
    proto.createdCallback = function() {
        var root = this.createShadowRoot();
        root.appendChild(document.importNode(template.content, true));
    };

    // Register our new element
    document.registerElement(name, {
        prototype: proto
    });
};