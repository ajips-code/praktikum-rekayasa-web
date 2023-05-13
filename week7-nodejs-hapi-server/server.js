
const Hapi = require('@hapi/hapi');

const server = Hapi.server(
  {
    port: 3000,
    host: 'localhost'
  }
);

server.route(
  [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Praktikum Rekayasa Web</title>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <p>ini file yang ada di server.</p>
        </body>
        </html>
        `;
  
        return h.response(html).type('text/html');
      }
    },
    {
      method: 'GET',
      path: '/home',
      handler: (request, h) => {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Praktikum Rekayasa Web</title>
        </head>
        <body>
          <h1>Ini adalah /home</h1>
          <p>ini file yang ada di server.</p>
        </body>
        </html>
        `;
  
        return h.response(html).type('text/html');
      }
    }
  ]
);

async function start() {
  await server.start();
  console.log('Server running at: %s', server.info.uri);
}

start();