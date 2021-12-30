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


### Common errors
1. When you install this lib from source code for debug and development, then there are 2 copies of ract used. first from your app, and second from yor lib. This can cause a problem. To void this issue, use the following hack

Point the react in your application project to point to the react module where you have checked-out this project.
```shell
"dependencies": {
    ...
    "react": "file:../devlibx-ui/node_modules/react",
    ...
}
```

---
# Kafka broker input
This will show a input to take kafka broker URL.
1. leftSideTitle - label to show
2. helpStr       - tooltip for help
```javascript
<KafkaBroker helpStr="You need to pass the broker to use" leftSideTitle="Broker URL"></KafkaBroker>
```
#### kafka topic input
This will show a input to take kafka topic.
```javascript
<KafkaTopic 
    helpStr="Provide your topic name" 
    leftSideTitle="Kafka Topic" 
    topic="$INTERNAL_TOPIC"
/>
```

