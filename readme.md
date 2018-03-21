# Express React Starter

Simple starter code for an Express app serving React.

## Getting Started

This will build using parcel, and serve the React app with an entry point at [index.html](src/index.html)

### Prerequisites

You need both Node.js and npm installed.

### Installing

To install the repo and dependencies:

```
git clone https://github.com/bdlj0887/express-react-base your-app-name-here
npm install

```

To start the dev environment:
```
npm run dev
```
This will build the front-end files with Parcel.js, start the watcher on those files, and run the Express server.


## Deployment

To deploy this, run:
```
npm run build
```
This will build the React app for production into the 'public/' folder.
You can then deploy to the platform of your choice, just ensure that NODE_ENV is set to production to ensure the app is served from 'public/'.

The app is also configured to deploy to Heroku already, simply create an account, download the Heroku CLI and:
```
heroku create MY_APP_NAME
git push heroku master
```
The 'start' script located within the [package.json](package.json) file will both build the React app and start the server.

## Built With

* [React](https://reactjs.org) - The web framework used
* [Parcel.js](https://parceljs.org/) - Zero-configuration Build Tool
* [Express](https://expressjs.com/) - Node Backend Framework

## Authors

* **Ben Johnson** - *Initial work* - [bdlj0887](https://github.com/bdlj0887)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [mpj](https://github.com/mpj) - Inspiration for this project
