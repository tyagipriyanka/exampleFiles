//Create a Page Object folder

describe('Filter Page objects created', function(){
    

var FilterPageObject = require('../object/FilterDateObject.js');

    it('Should be able to click on Filter', function(){
        FilterPageObject.login('summer');
        FilterPageObject.clickFilterIcon();
			});
    
    it('Should click on Dates tab', function(){
        FilterPageObject.clickDate();
		});
        
    it('Should click Date options', function(){
		FilterPageObject.clickFromDate();
		});
		
	it('Should click Date options', function(){
		FilterPageObject.clickToDate();
	});
	
	it('should click Apply',function(){
		FilterPageObject.clickApply();
		});
	
});
