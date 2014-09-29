var items = [
    { title: 'test' },
    { title: 'test2' },
    { title: 'test3' },
    { title: 'test4' },
    { title: 'test5' },
];


var ractive = new Ractive({
    // The `el` option can be a node, an ID, or a CSS selector.
    el: 'container',

    // We could pass in a string, but for the sake of convenience
    // we're passing the ID of the <script> tag above.
    template: '#template',

    // Here, we're passing in some initial data
    data: {
        "items": items
    }


});
