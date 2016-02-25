# ajax-autocomplete
Search for strings, parse response and add to search input as an autocomplete dropdown list.

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
│   │   └── sample.json   // http://localhost:3000/sample.json
│   └── views             // view files
│       └── index.jade    // jade compiles/turns these into html
```
