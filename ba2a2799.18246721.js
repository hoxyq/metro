(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(1),o=n(6),r=(n(0),n(88)),a={id:"configuration",title:"Configuring Metro"},l={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuring Metro",description:"A Metro config can be created in these three ways (ordered by priority):",source:"@site/../docs/Configuration.md",permalink:"/metro/docs/configuration",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Configuration.md",lastUpdatedAt:1644410936,sidebar:"docs",previous:{title:"API",permalink:"/metro/docs/api"},next:{title:"Metro CLI Options",permalink:"/metro/docs/cli"}},b=[{value:"Configuration Structure",id:"configuration-structure",children:[{value:"General Options",id:"general-options",children:[]},{value:"Resolver Options",id:"resolver-options",children:[]},{value:"Transformer Options",id:"transformer-options",children:[]},{value:"Serializer Options",id:"serializer-options",children:[]},{value:"Server Options",id:"server-options",children:[]}]},{value:"Merging Configurations",id:"merging-configurations",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Metro config can be created in these three ways (ordered by priority):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"metro.config.js")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"metro.config.json")),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"metro")," field in ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"))),Object(r.b)("p",null,"You can also give a custom file to the configuration by specifying ",Object(r.b)("inlineCode",{parentName:"p"},"--config <path/to/config>")," when calling the CLI."),Object(r.b)("h2",{id:"configuration-structure"},"Configuration Structure"),Object(r.b)("p",null,"The configuration is based on ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/metro/docs/concepts"}),"our concepts"),", which means that for every module we have a separate config option. A common configuration structure in Metro looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n")),Object(r.b)("h3",{id:"general-options"},"General Options"),Object(r.b)("h4",{id:"cachestores"},Object(r.b)("inlineCode",{parentName:"h4"},"cacheStores")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<CacheStore<TransformResult<>>>")),Object(r.b)("p",null,"List where we store our ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/metro/docs/caching"}),"caches"),"."),Object(r.b)("h4",{id:"cacheversion"},Object(r.b)("inlineCode",{parentName:"h4"},"cacheVersion")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Can be used to generate a key that will invalidate the whole metro cache."),Object(r.b)("h4",{id:"projectroot"},Object(r.b)("inlineCode",{parentName:"h4"},"projectRoot")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"The root folder of your project."),Object(r.b)("h4",{id:"watchfolders"},Object(r.b)("inlineCode",{parentName:"h4"},"watchFolders")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"Specify any additional (to projectRoot) watch folders, this is used to know which files to watch.\n(By default the file watching is disabled in CI environments. Also it can be manually disabled by setting the env variable ",Object(r.b)("inlineCode",{parentName:"p"},"CI=true"),")"),Object(r.b)("h4",{id:"transformerpath"},Object(r.b)("inlineCode",{parentName:"h4"},"transformerPath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"The path to the transformer to use."),Object(r.b)("h4",{id:"reporter"},Object(r.b)("inlineCode",{parentName:"h4"},"reporter")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"{update: () => void}")),Object(r.b)("p",null,"Used to report the status of the bundler during the bundling process."),Object(r.b)("h4",{id:"resetcache"},Object(r.b)("inlineCode",{parentName:"h4"},"resetCache")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Whether we should reset the cache when starting the build."),Object(r.b)("h4",{id:"stickyworkers"},Object(r.b)("inlineCode",{parentName:"h4"},"stickyWorkers")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Control whether the created workers should stick based on filename or not."),Object(r.b)("h4",{id:"maxworkers"},Object(r.b)("inlineCode",{parentName:"h4"},"maxWorkers")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"The number of workers we should parallelize the transformer on."),Object(r.b)("h4",{id:"hastemapcachedirectory"},Object(r.b)("inlineCode",{parentName:"h4"},"hasteMapCacheDirectory")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"The path to the haste map cache directory, defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"os.tmpdir()"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resolver-options"},"Resolver Options"),Object(r.b)("h4",{id:"assetexts"},Object(r.b)("inlineCode",{parentName:"h4"},"assetExts")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"An array of asset extensions to include in the bundle. For example, if you would give ",Object(r.b)("inlineCode",{parentName:"p"},"['ttf']")," you would be able to include ",Object(r.b)("inlineCode",{parentName:"p"},".ttf")," files in the bundle."),Object(r.b)("h4",{id:"sourceexts"},Object(r.b)("inlineCode",{parentName:"h4"},"sourceExts")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"An array of source extensions to include in the bundle. For example, if you would give ",Object(r.b)("inlineCode",{parentName:"p"},"['ts']")," you would be able to include ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," files in the bundle."),Object(r.b)("h4",{id:"resolvermainfields"},Object(r.b)("inlineCode",{parentName:"h4"},"resolverMainFields")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"Specify the fields in package.json files that will be used by the module resolver to do redirections when requiring certain packages. The default is ",Object(r.b)("inlineCode",{parentName:"p"},"['browser', 'main']"),", so the resolver will use the ",Object(r.b)("inlineCode",{parentName:"p"},"browser")," field if it exists and ",Object(r.b)("inlineCode",{parentName:"p"},"main")," otherwise."),Object(r.b)("h4",{id:"disablehierarchicallookup"},Object(r.b)("inlineCode",{parentName:"h4"},"disableHierarchicalLookup")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Whether to disable ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders"}),"looking up modules in ",Object(r.b)("inlineCode",{parentName:"a"},"node_modules")," folders"),". This only affects the default search through the directory tree, not other Metro options like ",Object(r.b)("inlineCode",{parentName:"p"},"extraNodeModules")," or ",Object(r.b)("inlineCode",{parentName:"p"},"nodeModulesPaths"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h4",{id:"emptymodulepath"},Object(r.b)("inlineCode",{parentName:"h4"},"emptyModulePath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,'What module to use as the canonical "empty" module when one is needed. Defaults to using the one included in ',Object(r.b)("inlineCode",{parentName:"p"},"metro-runtime"),". You only need to change this if Metro is installed outside of your project."),Object(r.b)("h4",{id:"extranodemodules"},Object(r.b)("inlineCode",{parentName:"h4"},"extraNodeModules")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"{[name:string]:string}")),Object(r.b)("p",null,"Which other ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," to include besides the ones relative to the project directory. This is keyed by dependency name."),Object(r.b)("h4",{id:"nodemodulespaths"},Object(r.b)("inlineCode",{parentName:"h4"},"nodeModulesPaths")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"This option can be used to add additional ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," folders for Metro to locate third-party dependencies when resolving modules. This is useful if third-party dependencies are installed in a different location outside of the direct path of source files."),Object(r.b)("p",null,"This option works similarly to how ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"}),"$NODE_PATH")," works for Node.js based tooling, except that ",Object(r.b)("inlineCode",{parentName:"p"},"nodeModulesPaths")," takes precedence over hierarchical ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," lookup."),Object(r.b)("h4",{id:"resolverequest"},Object(r.b)("inlineCode",{parentName:"h4"},"resolveRequest")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"?CustomResolver")),Object(r.b)("p",null,"An optional function used to resolve requests. Particularly useful for cases where aliases or custom protocols are used. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"resolveRequest: (context, moduleName, platform) => {\n  if (moduleName.startsWith('my-custom-resolver:')) {\n    // Resolve file path logic...\n    // NOTE: Throw an error if there is no resolution.\n    return {\n      filePath: \"path/to/file\",\n      type: 'sourceFile',\n    };\n  }\n  // Optionally, chain to the standard Metro resolver.\n  return context.resolveRequest(context, moduleName, platform);\n}\n")),Object(r.b)("h4",{id:"usewatchman"},Object(r.b)("inlineCode",{parentName:"h4"},"useWatchman")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"If set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", it'll prevent Metro from using watchman (even if it's installed)"),Object(r.b)("p",null,"These options are only useful with React Native projects."),Object(r.b)("h4",{id:"blocklist"},Object(r.b)("inlineCode",{parentName:"h4"},"blockList")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"RegExp")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Array<RegExp>")),Object(r.b)("p",null,"A RegEx defining which paths to ignore, however if a blocklisted file is required it will be brought into the dependency graph."),Object(r.b)("h4",{id:"hasteimplmodulepath"},Object(r.b)("inlineCode",{parentName:"h4"},"hasteImplModulePath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"The path to the haste resolver."),Object(r.b)("h4",{id:"platforms"},Object(r.b)("inlineCode",{parentName:"h4"},"platforms")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,'Additional platforms to look out for, For example, if you want to add a "custom" platform, and use modules ending in .custom.js, you would return ',"['custom']"," here."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transformer-options"},"Transformer Options"),Object(r.b)("h4",{id:"asyncrequiremodulepath"},Object(r.b)("inlineCode",{parentName:"h4"},"asyncRequireModulePath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"What module to use for handling async requires."),Object(r.b)("h4",{id:"babeltransformerpath"},Object(r.b)("inlineCode",{parentName:"h4"},"babelTransformerPath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Use a custom babel transformer (only relevant when using the default transformerPath). For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"// in your babelTransformer file\nmodule.exports = ({ filename, options, plugins, src }) => {\n  // transform file...\n  return { ast: AST };\n}\n")),Object(r.b)("h4",{id:"dynamicdepsinpackages"},Object(r.b)("inlineCode",{parentName:"h4"},"dynamicDepsInPackages")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")," (",Object(r.b)("inlineCode",{parentName:"p"},"throwAtRuntime")," or ",Object(r.b)("inlineCode",{parentName:"p"},"reject"),")"),Object(r.b)("p",null,"What should happen when a dynamic dependency is found."),Object(r.b)("h4",{id:"enablebabelrclookup"},Object(r.b)("inlineCode",{parentName:"h4"},"enableBabelRCLookup")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")"),Object(r.b)("p",null,"Whether we should use the ",Object(r.b)("inlineCode",{parentName:"p"},".babelrc")," config file."),Object(r.b)("h4",{id:"enablebabelruntime"},Object(r.b)("inlineCode",{parentName:"h4"},"enableBabelRuntime")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")"),Object(r.b)("p",null,"Whether the transformer should use the ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/transform/runtime")," plugin."),Object(r.b)("h4",{id:"gettransformoptions"},Object(r.b)("inlineCode",{parentName:"h4"},"getTransformOptions")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"GetTransformOptions")),Object(r.b)("p",null,"Get the transform options."),Object(r.b)("h4",{id:"hermesparser"},Object(r.b)("inlineCode",{parentName:"h4"},"hermesParser")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," (default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),")"),Object(r.b)("p",null,"Use the hermes-parser package to use call Hermes parser via WASM instead of the Babel parser."),Object(r.b)("h4",{id:"minifierpath"},Object(r.b)("inlineCode",{parentName:"h4"},"minifierPath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Path to the minifier that minifies the code after transformation."),Object(r.b)("h4",{id:"minifierconfig"},Object(r.b)("inlineCode",{parentName:"h4"},"minifierConfig")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"{[key: string]: mixed}")),Object(r.b)("p",null,"Configuration object that will be passed to the minifier (it should be serializable)."),Object(r.b)("h4",{id:"optimizationsizelimit"},Object(r.b)("inlineCode",{parentName:"h4"},"optimizationSizeLimit")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Define a threshold (in bytes) to disable some expensive optimizations for big files."),Object(r.b)("h4",{id:"react-native-only"},"React Native Only"),Object(r.b)("h4",{id:"assetplugins"},Object(r.b)("inlineCode",{parentName:"h4"},"assetPlugins")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array<string>")),Object(r.b)("p",null,"List of modules to call to modify Asset data"),Object(r.b)("h4",{id:"assetregistrypath"},Object(r.b)("inlineCode",{parentName:"h4"},"assetRegistryPath")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Where to fetch the assets from."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"serializer-options"},"Serializer Options"),Object(r.b)("h4",{id:"getrunmodulestatement"},Object(r.b)("inlineCode",{parentName:"h4"},"getRunModuleStatement")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"(number")," ","|"," ",Object(r.b)("inlineCode",{parentName:"p"},"string) => string")),Object(r.b)("p",null,"Specify the format of the initial require statements that are appended at the end of the bundle. By default is ",Object(r.b)("inlineCode",{parentName:"p"},"__r(${moduleId});"),"."),Object(r.b)("h4",{id:"createmoduleidfactory"},Object(r.b)("inlineCode",{parentName:"h4"},"createModuleIdFactory")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"() => (path: string) => number")),Object(r.b)("p",null,"Used to generate the module id for ",Object(r.b)("inlineCode",{parentName:"p"},"require")," statements."),Object(r.b)("h4",{id:"getpolyfills"},Object(r.b)("inlineCode",{parentName:"h4"},"getPolyfills")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"({platform: ?string}) => $ReadOnlyArray<string>")),Object(r.b)("p",null,"An optional list of polyfills to include in the bundle. The list defaults to a set of common polyfills for Number, String, Array, Object..."),Object(r.b)("h4",{id:"postprocessbundlesourcemap"},Object(r.b)("inlineCode",{parentName:"h4"},"postProcessBundleSourcemap")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"PostProcessBundleSourcemap")),Object(r.b)("p",null,"An optional function that can modify the code and source map of the bundle before it is written. Applied once for the entire bundle."),Object(r.b)("h4",{id:"getmodulesrunbeforemainmodule"},Object(r.b)("inlineCode",{parentName:"h4"},"getModulesRunBeforeMainModule")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"(entryFilePath: string) => Array<string>")),Object(r.b)("p",null,"An array of modules to be required before the entry point. It should contain the absolute path of each module. Note that this will add the additional require statements only if the passed modules are already included as part of the bundle."),Object(r.b)("h4",{id:"processmodulefilter"},Object(r.b)("inlineCode",{parentName:"h4"},"processModuleFilter")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"(module: Array<Module>) => boolean")),Object(r.b)("p",null,"A filter function to discard specific modules from the output."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"server-options"},"Server Options"),Object(r.b)("p",null,"These options are used when Metro serves the content."),Object(r.b)("h4",{id:"port"},Object(r.b)("inlineCode",{parentName:"h4"},"port")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number")),Object(r.b)("p",null,"Which port to listen on."),Object(r.b)("h4",{id:"useglobalhotkey"},Object(r.b)("inlineCode",{parentName:"h4"},"useGlobalHotkey")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Whether we should enable CMD+R hotkey for refreshing the bundle."),Object(r.b)("h4",{id:"enhancemiddleware"},Object(r.b)("inlineCode",{parentName:"h4"},"enhanceMiddleware")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"(Middleware, Server) => Middleware")),Object(r.b)("p",null,"The possibility to add custom middleware to the server response chain."),Object(r.b)("h4",{id:"rewriterequesturl"},Object(r.b)("inlineCode",{parentName:"h4"},"rewriteRequestUrl")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string => string")),Object(r.b)("p",null,"A function that will be called every time Metro processes a URL. Metro will use the return value of this function as if it were the original URL provided by the client. This applies to all incoming HTTP requests (after any custom middleware), as well as bundle URLs in ",Object(r.b)("inlineCode",{parentName:"p"},"/symbolicate")," request payloads and within the hot reloading protocol."),Object(r.b)("h4",{id:"runinspectorproxy"},Object(r.b)("inlineCode",{parentName:"h4"},"runInspectorProxy")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")"),Object(r.b)("p",null,"Run Inspector Proxy server inside Metro to be able to inspect React Native code."),Object(r.b)("h2",{id:"merging-configurations"},"Merging Configurations"),Object(r.b)("p",null,"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"metro-config")," package it is possible to merge multiple configurations together."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Method"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mergeConfig(...configs): MergedConfig")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Returns the merged configuration of two or more configuration objects.")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Arrays and function based config parameters do not deeply merge and will instead override any pre-existing config parameters.\nThis allows overriding and removing default config parameters such as ",Object(r.b)("inlineCode",{parentName:"p"},"platforms")," or ",Object(r.b)("inlineCode",{parentName:"p"},"getModulesRunBeforeMainModule")," that may not be required in your environment.")),Object(r.b)("h4",{id:"merging-example"},"Merging Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'// metro.config.js\nconst { mergeConfig } = require("metro-config");\n\nconst configA = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nconst configB = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nmodule.exports = mergeConfig(configA, configB);\n')))}p.isMDXComponent=!0}}]);