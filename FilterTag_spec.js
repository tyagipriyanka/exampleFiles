//Create a Page Object folder

describe('Filter Page objects created', function(){
    

var FilterPageObject = require('../object/FilterTagObject.js');

     
    it('Should click on Tags tab', function(){
		FilterPageObject.login();
        FilterPageObject.clickFilter();
		FilterPageObject.filterMenu();
        FilterPageObject.clickTagsIcon();
    });
        
    it('Should click Products tag option', function(){
        FilterPageObject.clickTagOption('PRODUCTS');
        FilterPageObject.clickApply();
        });

    it('Should click Catalogs tag option', function(){
		FilterPageObject.clickFilter();
        FilterPageObject.clickTagsIcon();
        FilterPageObject.clickTagOption('CATALOGS');
        FilterPageObject.clickApply();
        });
   
    
    it('Should perform all the functions sequentially and selects PRODUCTS/CATALOGS', function(){
       FilterPageObject.clickFilter();
       FilterPageObject.clickTagsIcon();
       FilterPageObject.clickTagOption('PRODUCTS');
       FilterPageObject.clickApply();
    });
    

});
