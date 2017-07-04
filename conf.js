// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    // allows different specs to run in parallel.
    // If this is set to be true, specs will be sharded by file
    // (i.e. all files to be run by this set of capabilities will run in parallel).
    // Default is false.
    shardTestFiles: true,
    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    maxInstances: 5, 
},


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: ['../spec/smoke_spec.js','../spec/FilterTag_spec.js','../spec/FilterImage_spec.js','../spec/FilterDate_spec.js'],
  specs: ['../spec/FilterDate_spec.js'],

  //baseUrl: 'test',

// Options to be passed to Jasmine.
jasmineNodeOpts: {
	showColors: true,
	defaultTimeoutInterval: 30000
  },
  
//output file path to store the final results
resultJsonOutputFile:'../testResults.json', 
};
