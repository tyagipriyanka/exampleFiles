// FILTER Options

describe("'Filter Page objects created'", function(){
   
   var FilterPageObject = require('../object/FilterImageObject.js');
   
   it('Login', function(){
		FilterPageObject.login();
   });
  
   it('Should click on filter option', function(){
       //click on filter option
       FilterPageObject.clickFilter();       
   });
   
  
   it('Filter menu bar should slide open', function(){
        FilterPageObject.filterMenu();       
   });
   
       
       
    it('Should click on Images tab', function(){
        FilterPageObject.clickImageTab();
    });
   
   
    
    it('Should click on Used Image Filter', function(){
       FilterPageObject.clickUsedImage();  
		FilterPageObject.clickApply();
    });
    
	it('Should click on Unused Image Filter', function(){
		FilterPageObject.clickFilter();
		FilterPageObject.clickImageTab();
		FilterPageObject.clickUnusedImage(); 
		FilterPageObject.clickApply();
	});
		
});