var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server();

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'views')
});


server.connection({
    port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply.view('index', {
            title: 'My home page',
            body: "Hello World!!"
        });
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});