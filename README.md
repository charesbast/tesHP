# Hari Potier's Library

E-commerce website selling Hari Potier famous books.
Several features have been implemented:

- Adding any of the seven books to the shopping cart
- Displaying in real time the shopping cart size (top-right corner of the navbar)
- Managing the cart:
  Adding or removing one quantity of the article
  Removing all quantities of an article
- Calculating the best offer for the cart each time that the cart changes

## Requirements

- Git
- NodeJs

## Install

To deploy the project and install all the dependencies, clone the repository from github (see git commands below)

```sh
#Git
git clone https://github.com/charesbast/testHP.git   # clone repository

#install (Web Server)
npm install                     # install nodejs dependencies
bower install                   # install bower dependencies

#Gulp tasks
gulp serve                      # Web server on port 3000
gulp test                       # launch all unit tests
gulp build                      # packages the app for deployment 
                                 (concat + minify html/css/js and bower dependencies)
```

### Architecture

    bower_components/                   --> libraries managed by bower
    dist/                               --> all of the files to be used in production
    gulp/                               --> all gulp tasks
    node_modules/                       --> libraries managed by nodeJs
    src/                                --> files used for development
        app/                            
          components/                   --> angular components
            directives/                 --> angular directives
            services/                   --> angular services/factories
          shopping_cart/                --> shopping_cart module
          store/                        --> store module
        assets/                         
            images/                     --> images stored locally
        fonts/                          --> fonts files