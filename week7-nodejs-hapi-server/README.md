# Membuat Back-End Server dengan NodeJs Hapi

## Install Hapi
Pertama-tama install `Hapi` menggunakan `NPM` (Node Package Manager).
Buka Terminal atau Command Prompt lalu masukkan perintah berikut:
```
npm init
```
Selanjutnya install `Hapi` module:
```
npm install @hapi/hapi
```

## Membuat Server menggunakan Hapi
Sebelum menggunakan `Hapi`, kita perlu membuat sebuah server menggunakan `Hapi`. Buat file `server.js` lalu tambahkan kode berikut:
```
const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

async function start() {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

start();

```

## Membuat End-point
Untuk membuat end-point pada server, tambahkan kode baru dalam `server.js`.
Misalnya, menambahkan end-point dengan path `/hello` yang meresponse dengan pesan "Hello World!".
```
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
        return 'Hello World!';
    }
});
```
Kode di atas menambahkan rute HTTP GET ke server `Hapi` pada path `/hello`.

## Menjalankan Server
Untuk menjalankan server, kita perlu menambahkan perintah berikut pada `server.js`.
```
async function start() {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

start();
```
Sekarang tinggal jalankan server dengan mengetikkan perintah `node server.js` di terminal atau command prompt.