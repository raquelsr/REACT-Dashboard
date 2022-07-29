
const Hapi = require('@hapi/hapi');

const data = {
    users: [{
        user: 'Raquel',
        rol: 'Admin'
    }]
}

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return data;
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            data.users.push(request.payload);
            return data;
        }
    }]);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();