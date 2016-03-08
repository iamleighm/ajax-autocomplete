# ajax-autocomplete

Search for strings, parse response and add to search input as an autocomplete dropdown list.

<<<<<<< HEAD
Lessons are split into branches

 - Lesson 1: branch [l1-setup-quick-sandbox](https://github.com/coder-forge/ajax-autocomplete/tree/l1-setup-quick-sandbox)
 - Lesson 2: branch [l2-listen-request](https://github.com/coder-forge/ajax-autocomplete/tree/l2-listen-and-request)
 - Lesson 3: branch [l3-listen-response](https://github.com/coder-forge/ajax-autocomplete/tree/l3-listen-response)
 - Lesson 4: branch [l4-build-response](https://github.com/coder-forge/ajax-autocomplete/tree/l4-build-response)

## Requirements

 - NodeJS
 - Bower (install after nodejs)

### Lesson 1: Setup Quick Sandbox

Here we structure our app. We want to quickly provision a server and some
front end files. To do this we concentrate on the configuration files and then
install the requirements.

### Lesson 2: Client event listeners & make request

Use client side javascript framework, jQuery, to add a `listener` to an input
box. This will listen for the `keyup` event and capture the current value of the
input box.

### Lesson 3: Server listen request and send response

The running server will listen for requests on an `endpoint` and serve a json
response

### Lesson 4: Client build response

Using the response from `lesson 3` we build an html list to append below the
input box.
=======
# 1 - get code

Clone this repo by running the following from a command line. Type everything
except the `$` character at the start of the line
```bash
$ git clone https://github.com/coder-forge/ajax-autocomplete
$ cd ajax-autocomplete
```

# 2 - Config files

In order to keep things clean, all our config files will go into the root
directory of our project. This also means that any developer looking at our app
will instantly know that we are using npm (because of `package.json` file) and
bower (because of `bower.json` & `.bowerrc` files).

NPM is installed by node by default. It reads the package.json file and installs
our node packages for us.
Bower is installed by node using `npm install -g bower` and manages our front
end packages, ie jquery and bootstrap.

```bash
.
├── .bowerrc      // define where bower will install client packages
├── .gitignore    // stuff we want git to the repo
├── bower.json    // main bower config file
├── package.json  // main npm config file
└── README.md     // instructions for both users and developers
```

# 3 - important files & directories

The code that will run our server goes into `app/`.

```bash
├── app                   // holds all our code
│   ├── app.js            // our main application
│   ├── public            // the front end root
│   │   └── sample.json   // json endpoint. Get http://localhost:3000/sample.json
│   └── views             // view files
│       └── index.jade    // jade compiles/turns these into html
```

# 4 - Run server

Run:
```bash
$ npm install
$ npm start
```

The server is accessible from [http://localhost:3000](http://localhost:3000)

The first command will run the `scripts.start` field in the [package.json, in this case calling `nodemon ./app/app.js`
file](https://github.com/coder-forge/ajax-autocomplete/blob/l1-setup-quick-sandbox/package.json#L6).

```json
{
  "name": "ajax-autocomplete",
  "version": "0.0.1",
  "private": false,
  "scripts": {
    "start": "nodemon ./app/app.js",
    "postinstall": "bower install"
  }
  ...
```
>>>>>>> dc3d11b7bfa4f21d24daa6b20e938feeb1a9f3a4
