### Setup
1. Install required packages
```shell
npm install --save-dev @babel/preset-react
```

### How to publish a NPM react package

1. Add the ```babel.config.js``` (you can copy from this project)

2. Edit ```package.json```
```shell
"name": "devlibx-ui",
"version": "0.1.5",
"private": false,
"main": "dist/index.js",
"module": "dist/index.js",
```

Also edit ```scripts``` section in package.json 
```shell
    "build": "rm -rf dist && NODE_ENV=production babel src/components --out-dir dist --copy-files"
```    

We need to build the package and compile JSX to native JS. For that we use ```bable```, here out build command will compile the js file to final files and will push in under ```dist folder```


### Publish
Make changes and run following commands
```shell
sh publish.sh
```