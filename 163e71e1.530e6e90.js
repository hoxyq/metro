(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(0),n(88)),i={id:"getting-started",title:"Getting Started"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Install Metro using npm:",source:"@site/../docs/GettingStarted.md",permalink:"/metro/docs/getting-started",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/GettingStarted.md",lastUpdatedAt:1644410936,sidebar:"docs",next:{title:"Concepts",permalink:"/metro/docs/concepts"}},s=[{value:"Running <code>metro</code>",id:"running-metro",children:[{value:"Running Programatically",id:"running-programatically",children:[]},{value:"Method <code>runMetro(config)</code>",id:"method-runmetroconfig",children:[]},{value:"Method <code>runServer(config, options)</code>",id:"method-runserverconfig-options",children:[]},{value:"Method <code>runBuild(config, options)</code>",id:"method-runbuildconfig-options",children:[]},{value:"Method <code>createConnectMiddleware(config)</code>",id:"method-createconnectmiddlewareconfig",children:[]}]},{value:"Available options",id:"available-options",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"URL and bundle request",id:"url-and-bundle-request",children:[{value:"Assets",id:"assets",children:[]},{value:"Bundle",id:"bundle",children:[]},{value:"Source maps",id:"source-maps",children:[]}]},{value:"JavaScript transformer",id:"javascript-transformer",children:[{value:"Method <code>transform(module)</code>",id:"method-transformmodule",children:[]},{value:"Method <code>getCacheKey()</code>",id:"method-getcachekey",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Install Metro using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),Object(o.b)("inlineCode",{parentName:"a"},"npm")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev metro metro-core\n")),Object(o.b)("p",null,"Or via ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com/"}),Object(o.b)("inlineCode",{parentName:"a"},"yarn")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev metro metro-core\n")),Object(o.b)("h2",{id:"running-metro"},"Running ",Object(o.b)("inlineCode",{parentName:"h2"},"metro")),Object(o.b)("p",null,"You can run Metro by either running the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/metro/docs/cli"}),"CLI")," or by calling it programmatically."),Object(o.b)("h3",{id:"running-programatically"},"Running Programatically"),Object(o.b)("p",null,"First, require the module by doing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Metro = require('metro');\n")),Object(o.b)("p",null,"Within the object returned, several main methods are given:"),Object(o.b)("h3",{id:"method-runmetroconfig"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"runMetro(config)")),Object(o.b)("p",null,"Given the config, a ",Object(o.b)("inlineCode",{parentName:"p"},"metro-server")," will be returned. You can then hook this into a proper HTTP(S) server by using its ",Object(o.b)("inlineCode",{parentName:"p"},"processRequest")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"'use strict';\n\nconst http = require('http');\nconst Metro = require('metro');\n\n// We first load the config from the file system\nMetro.loadConfig().then(async (config) => {\n  const metroBundlerServer = await Metro.runMetro(config);\n\n  const httpServer = http.createServer(\n    metroBundlerServer.processRequest.bind(metroBundlerServer),\n  );\n\n  httpServer.listen(8081);\n});\n")),Object(o.b)("p",null,"In order to be also compatible with Express apps, ",Object(o.b)("inlineCode",{parentName:"p"},"processRequest")," will also call its third parameter when the request could not be handled by Metro. This allows you to integrate the server with your existing server, or to extend a new one:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const httpServer = http.createServer((req, res) => {\n  metroBundlerServer.processRequest(req, res, () => {\n    // Metro does not know how to handle the request.\n  });\n});\n")),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://expressjs.com/"}),"Express"),", you can just pass ",Object(o.b)("inlineCode",{parentName:"p"},"processRequest")," as a middleware:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\napp.use(\n  metroBundlerServer.processRequest.bind(metroBundlerServer),\n);\n\napp.listen(8081);\n")),Object(o.b)("h3",{id:"method-runserverconfig-options"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"runServer(config, options)")),Object(o.b)("p",null,"Starts a development server based on the given configuration and options. Returns the server.\nWe recommend using ",Object(o.b)("inlineCode",{parentName:"p"},"runMetro")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"runServer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"runMetro")," calls this function."),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"host (string)"),": Where to host the server on."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onReady (Function)"),": Called when the server is ready to serve requests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"secure (boolean)"),": ",Object(o.b)("strong",{parentName:"li"},"DEPRECATED")," Whether the server should run on ",Object(o.b)("inlineCode",{parentName:"li"},"https")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"http"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"secureKey (string)"),": ",Object(o.b)("strong",{parentName:"li"},"DEPRECATED")," The key to use for ",Object(o.b)("inlineCode",{parentName:"li"},"https")," when ",Object(o.b)("inlineCode",{parentName:"li"},"secure")," is on."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"secureCert (string)"),": ",Object(o.b)("strong",{parentName:"li"},"DEPRECATED")," The cert to use for ",Object(o.b)("inlineCode",{parentName:"li"},"https")," when ",Object(o.b)("inlineCode",{parentName:"li"},"secure")," is on."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"secureServerOptions (Object)"),": The options object to pass to the Metro's https server. The presence of this object will make Metro's server run on ",Object(o.b)("inlineCode",{parentName:"li"},"https"),". Refer to the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener"}),"nodejs docs")," for valid options."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"waitForBundler (boolean)"),": Whether to wait for the bundler to finish initializing before returning the server instance.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const config = await Metro.loadConfig();\n\nawait Metro.runServer(config, {\n  port: 8080,\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fs = require('fs');\n\nconst config = await Metro.loadConfig();\n\nawait Metro.runServer(config, {\n  port: 8080,\n  secureServerOptions: {\n    ca: fs.readFileSync('path/to/ca'),\n    cert: fs.readFileSync('path/to/cert'),\n    key: fs.readFileSync('path/to/key'),\n  }\n});\n")),Object(o.b)("h3",{id:"method-runbuildconfig-options"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"runBuild(config, options)")),Object(o.b)("p",null,"Given a configuration and a set of options that you would typically pass to a server, plus a set of options specific to the bundle itself, a bundle will be built. The return value is a Promise that resolves to an object with two properties, ",Object(o.b)("inlineCode",{parentName:"p"},"code")," and ",Object(o.b)("inlineCode",{parentName:"p"},"map"),". This is useful at build time."),Object(o.b)("h4",{id:"options-1"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dev (boolean)"),": Create a development version of the build (",Object(o.b)("inlineCode",{parentName:"li"},"process.env.NODE_ENV = 'development'"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"entry (string)"),": Pointing to the entry file to bundle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onBegin (Function)"),": Called when the bundling starts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onComplete (Function)"),": Called when the bundling finishes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onProgress (Function)"),": Called during the bundle, every time there's new information available about the module count/progress."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"minify (boolean)"),": Whether Metro should minify the bundle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"out (string)"),": Path to the output bundle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"platform ('web' | 'android' | 'ios')"),": Which platform to bundle for if a list of platforms is provided."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sourceMap (boolean)"),": Whether Metro should generate source maps."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sourceMapUrl (string)"),": URL where the source map can be found. It defaults to the same same URL as the bundle, but changing the extension from ",Object(o.b)("inlineCode",{parentName:"li"},".bundle")," to ",Object(o.b)("inlineCode",{parentName:"li"},".map"),". When ",Object(o.b)("inlineCode",{parentName:"li"},"inlineSourceMap")," is ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", this property has no effect.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const config = await Metro.loadConfig();\n\nawait Metro.runBuild(config, {\n  entry: 'index.js',\n  platform: 'ios',\n  minify: true,\n  out: '/Users/Metro/metro-ios.js'\n});\n")),Object(o.b)("h3",{id:"method-createconnectmiddlewareconfig"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"createConnectMiddleware(config)")),Object(o.b)("p",null,"Instead of creating the full server, creates a Connect middleware that answers to bundle requests. This middleware can then be plugged into your own servers. The ",Object(o.b)("inlineCode",{parentName:"p"},"port")," parameter is optional and only used for logging purposes."),Object(o.b)("h4",{id:"options-2"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"port (number)"),": Port for the Connect Middleware (Only for logging purposes).")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const Metro = require('metro');\nconst express = require('express');\nconst app = express();\nconst server = require('http').Server(app);\n\nMetro.loadConfig().then(async config => {\n  const connectMiddleware = await Metro.createConnectMiddleware(config);\n  const {server: {port}} = config;\n\n  app.use(connectMiddleware.middleware);\n  server.listen(port);\n  connectMiddleware.attachHmrServer(server);\n});\n")),Object(o.b)("h2",{id:"available-options"},"Available options"),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/metro/docs/configuration"}),"Configuring Metro")," for details on configuration options."),Object(o.b)("h2",{id:"url-and-bundle-request"},"URL and bundle request"),Object(o.b)("p",null,"The server has the ability to serve assets, bundles and source maps for those bundles."),Object(o.b)("h3",{id:"assets"},"Assets"),Object(o.b)("p",null,"In order to request an asset, you can freely use the ",Object(o.b)("inlineCode",{parentName:"p"},"require")," method as if it was another JS file. The server will treat this specific ",Object(o.b)("inlineCode",{parentName:"p"},"require")," calls  and make them return the path to that file. When an asset is requested (an asset is recognized by its extension, which has to be on the ",Object(o.b)("inlineCode",{parentName:"p"},"assetExts")," array) it is generally served as-is."),Object(o.b)("p",null,"However, the server is also able to serve specific assets depending on the platform and on the requested size (in the case of images). The way you specify the platform is via the dotted suffix (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},".ios"),") and the resolution via the at suffix (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"@2x"),"). This is transparently handled for you when using ",Object(o.b)("inlineCode",{parentName:"p"},"require"),"."),Object(o.b)("h3",{id:"bundle"},"Bundle"),Object(o.b)("p",null,"Any JS file can be used as the root for a bundle request. The file will be looked in the ",Object(o.b)("inlineCode",{parentName:"p"},"projectRoot"),". All files that are required by the root will be recursively included. In order to request a bundle, just change the extension from ",Object(o.b)("inlineCode",{parentName:"p"},".js")," to ",Object(o.b)("inlineCode",{parentName:"p"},".bundle"),". Options for building the bundle are passed as query parameters (all optional)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dev"),": build the bundle in development mode or not. Maps 1:1 to the ",Object(o.b)("inlineCode",{parentName:"li"},"dev")," setting of the bundles. Pass ",Object(o.b)("inlineCode",{parentName:"li"},"true")," or ",Object(o.b)("inlineCode",{parentName:"li"},"false")," as strings into the URL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"platform"),": platform requesting the bundle. Can be ",Object(o.b)("inlineCode",{parentName:"li"},"ios")," or ",Object(o.b)("inlineCode",{parentName:"li"},"android"),". Maps 1:1 to the ",Object(o.b)("inlineCode",{parentName:"li"},"platform")," setting of the bundles."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"minify"),": whether code should be minified or not. Maps 1:1 to the ",Object(o.b)("inlineCode",{parentName:"li"},"minify")," setting of the bundles. Pass ",Object(o.b)("inlineCode",{parentName:"li"},"true")," or ",Object(o.b)("inlineCode",{parentName:"li"},"false")," as strings into the URL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"excludeSource"),": whether sources should be included in the source map or not. Pass ",Object(o.b)("inlineCode",{parentName:"li"},"true")," or ",Object(o.b)("inlineCode",{parentName:"li"},"false")," as strings into the URL.")),Object(o.b)("p",null,"For instance, requesting ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:8081/foo/bar/baz.bundle?dev=true&platform=ios")," will create a bundle out of ",Object(o.b)("inlineCode",{parentName:"p"},"foo/bar/baz.js")," for iOS in development mode."),Object(o.b)("h3",{id:"source-maps"},"Source maps"),Object(o.b)("p",null,"Source maps are built for each bundle by using the same URL as the bundle (thus, the same as the JS file acting as a root). This will only work when ",Object(o.b)("inlineCode",{parentName:"p"},"inlineSourceMap")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". All options you passed to the bundle will be added to the source map URL; otherwise, they wouldn't match."),Object(o.b)("h2",{id:"javascript-transformer"},"JavaScript transformer"),Object(o.b)("p",null,"The JavaScript transformer (",Object(o.b)("inlineCode",{parentName:"p"},"babelTransformerPath"),") is the place where JS code will be manipulated; useful for calling Babel. The transformer can export two methods:"),Object(o.b)("h3",{id:"method-transformmodule"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"transform(module)")),Object(o.b)("p",null,"Mandatory method that will transform code. The object received has information about the module being transformed (e.g its path, code...) and the returned object has to contain an ",Object(o.b)("inlineCode",{parentName:"p"},"ast")," key that is the AST representation of the transformed code. The default shipped transformer does the bare minimum amount of work by just parsing the code to AST:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const babylon = require('@babel/parser');\n\nmodule.exports.transform = (file: {filename: string, src: string}) => {\n  const ast = babylon.parse(file.src, {sourceType: 'module'});\n\n  return {ast};\n};\n")),Object(o.b)("p",null,"If you would like to plug-in babel, you can simply do that by passing the code to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {transformSync} = require('@babel/core');\n\nmodule.exports.transform = file => {\n  return transformSync(file.src, {\n    // Babel options...\n  });\n};\n")),Object(o.b)("h3",{id:"method-getcachekey"},"Method ",Object(o.b)("inlineCode",{parentName:"h3"},"getCacheKey()")),Object(o.b)("p",null,"Optional method that returns the cache key of the transformer. When using different transformers, this allows to correctly tie a transformed file to the transformer that converted it. The result of the method has to be a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."))}b.isMDXComponent=!0}}]);