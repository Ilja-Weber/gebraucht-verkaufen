var ractive = new Ractive({
    // The `el` option can be a node, an ID, or a CSS selector.
    el: 'container',

    // We could pass in a string, but for the sake of convenience
    // we're passing the ID of the <script> tag above.
    template: '#template',

    // Here, we're passing in some initial data
    data: {
        "name": "Alice",
        "unread": 7,
        "total": 10
    }


});



var start_loop = function(){
    ractive.set( 'unread', ( ractive.get( 'unread')+1 ) );
    if( ractive.get( 'unread' ) == ractive.get( 'total' ) ){
        clearTimeout( timeout );
    }
    setTimeout( start_loop, 1000);
}

start_loop();