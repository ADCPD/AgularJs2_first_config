##################  STEP TO STEP TO CREATE AN ANGULARJS 2 PROJECT  ##################

# create a new project AngularJs :

Ensuite, suivez les etapes de creation d'un nouveau projet NG-2:

# create index.html
> touch index.html

# create package.json with defaults
> npm init --yes

# install lite-server
> npm install --save-dev lite-server

# create the file "pakage.json" & execute the command
> npm run lite

##################  TYPESCRIPT  ##################
And now, we need to install the Typescript into you project NG-2.

# Add this line in the tsconfig.json
"lib": ["es2015", "dom"]

# Add this line in the  script > package.json:
"start": "concurrently \"npm run tsc:w\" \"npm run lite\"",

# install  the typescript package
> npm install --save-dev typescript @types/node @types/jasmine @types/core-js

# configurate with the same tsconfig.json

##################  Angular 2 : Dependencies  ##################

To install the dependencies use :
> npm install core-js reflect-metadata zone.js rxjs systemjs --save
or use :
> npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save

##################  Angular 2 : Packages  ##################

To install the angular packages use :
> npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save
> npm i @angular/upgrade

##### Install System.js 

create a new file systemjs.config.js and copy the same configuration of my project

Add the dependency in the view " index.html ": 
  <!-- Js Begin --->
    <!-- load the dependencies -->
    <script type="text/javascript" src="node_modules/core-js/client/shim.min.js"></script>
    <script type="text/javascript" src="node_modules/zone.js/dist/zone.js"></script>
    <script type="text/javascript" src="node_modules/reflect-metadata/Reflect.js"></script>
    <!-- load angular app with  system.js-->
    <script type="text/javascript" src="node_modules/systemjs/dist/system.src.js"></script>
    <script type="text/javascript" src="systemjs.config.js"></script>
    <script>
        system.import('app').catch(function (e) {
            console.error(e);
        });
    </script>
    <!-- Js End --->