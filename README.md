# Podcaster

Podcaster is an application made to listen to musical podcasts.

## Running The Application

The application is built with Vite.js and can be run in Development mode and Production mode.

To avoid CORS problems when fetching data, this application makes use of [cors-anywhere](https://cors-anywhere.herokuapp.com/). Before running the application, it is important that you visit the following url and request temporary access to the demo server:

https://cors-anywhere.herokuapp.com/corsdemo

### Development Mode

This mode will run the application without minifying and without optimizing the assets. To run the application in Development mode, simply run the following npm command:

```
npm run dev
```

### Production Mode

Production mode will minify and optimize all the application assets. To run the application in production mode, we first need to build the application. Then we can run and use the built application using Vite.js preview local server:

```
npm run build
npm run preview
```

_Note: This method is only intended to preview the built application but should not be used in the actual production server_
