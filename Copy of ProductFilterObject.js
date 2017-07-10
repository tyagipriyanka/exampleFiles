var FilterPageObject = function(){
  
  this.login =function(){
        browser.get('http://blubox.shoppinpal.com/seller/sell/gallery/images');
	    element(by.model('login.username')).sendKeys('9876543212');
	    var passrd = element(by.model('login.password')).sendKeys('priyanka');
	    passrd.sendKeys(protractor.Key.ENTER);
	    element(by.css('a[href="/seller/sell/products"]')).click();
	    expect(browser.getCurrentUrl()).toEqual('http://blubox.shoppinpal.com/seller/sell/products');
	};	
  
  this.clickFilterIcon = function(){
	    //click on filter option
       element(by.css('i[class="seller-icon sp-font-filter"]')).click();
   };
    
  this.assertFilterMenu = function(){
      //Check Filter menu slider appears
      var filterSlider = element(by.css('ul#filter-sidebar'));
      expect(filterSlider.isDisplayed()).toBe(true);
       
      //Display Header text
      filterSlider.getText().then(function(text){
          expect(text).toContain("FILTER BY");
//           console.log('Filter header text is equal to ', text);
          });
             
      //Try to click on it
      filterSlider.click();
   };
   
  this.categoryFilterApply = function(value){
    var CategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'categoryId\'}"]'));
        CategoryTab.getText().then(function(text){
			expect(text).toContain("Category");
			console.log('Filter Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Category tab');
			CategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion and click
        var searchElem = element(by.css('div[ng-click="pFilter.addFilter(data)"]'));
        searchElem.getText().then(function(text){
			expect(text).toContain("Cat");
			console.log('Inside Category text contains: ',text); 
			element(by.css('div[ng-click="pFilter.addFilter(data)"]')).click();
        });
        
   };

    this.categoryFilterRemove = function(value){
    var CategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'categoryId\'}"]'));
        CategoryTab.getText().then(function(text){
			expect(text).toContain("Category");
			console.log('Filter Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Category tab');
			CategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion and remove filter
        var searchElem = element(by.css('div[ng-class="{\'active-category\': data.isSelected}"]'));
        searchElem.getText().then(function(text){
			expect(text).toContain("Cat");
			console.log('Inside Category text contains: ',text); 
			searchElem.click();
        });
        
   };

    this.categoryFilterNeg = function(value){
    var CategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'categoryId\'}"]'));
        CategoryTab.getText().then(function(text){
			expect(text).toContain("Category");
			console.log('Filter Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Category tab');
			CategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion and no result should be found
        var searchElem = element(by.css('div[ng-click="pFilter.addFilter(data)"]'));
        expect(browser.isElementPresent(searchElem)).toBe(false);   //should pass
        expect(searchElem.isDisplayed()).toBe(false);               //should pass
        expect(searchElem.count()).toBe(0);                         //should pass
        searchElem.getText().then(function(text){
			expect(text).toContain("");                             //should pass
			console.log('Inside Category text contains: ',text); 
			//Should fail
			searchElem.click();
        });
        
   };

   this.subCategoryFilter = function(value) {
    var SubCategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'chotuCategoryId\'}"]'));
        SubCategoryTab.getText().then(function(text){
			expect(text).toContain("Sub-Category");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Sub-Category tab');
			SubCategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion
        var searchElem = element.all(by.css('div[ng-click="pFilter.addFilter(data)"]')); 
        searchElem.getText().then(function(text){
			expect(text).toContain("Sub");
			console.log('Inside Sub-Category text contains: ',text);
			searchElem.click(); 
        });
    
   };

    this.subCategoryFilterRemove = function(value){
    var SubCategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'chotuCategoryId\'}"]'));
        SubCategoryTab.getText().then(function(text){
			expect(text).toContain("Sub-Category");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Sub-Category tab');
			SubCategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion and remove filter
        var searchElem = element(by.css('div[ng-class="{\'active-category\': data.isSelected}"]'));
        searchElem.getText().then(function(text){
			expect(text).toContain("Sub");
			console.log('Inside Category text contains: ',text); 
			searchElem.click();
        });
    
   };

    this.subCategoryFilterNeg = function(value){
    var SubCategoryTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'chotuCategoryId\'}"]'));
        SubCategoryTab.getText().then(function(text){
			expect(text).toContain("Sub-Category");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Sub-Category tab');
			SubCategoryTab.click();
        });
        
        //Check search bar
        var searchBox= element.all(by.model('pFilter.category_search'));
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion and no result should be found
        var searchElem = element(by.css('div[ng-click="pFilter.addFilter(data)"]'));
        expect(browser.isElementPresent(searchElem)).toBe(false);   //should pass
        expect(searchElem.isDisplayed()).toBe(false);               //should pass
        expect(searchElem.count()).toBe(0);                         //should pass
        searchElem.getText().then(function(text){
			expect(text).toContain("");                             //should pass
			console.log('Inside Category text contains: ',text); 
			//Should fail
			searchElem.click();
        });
        
   };

   this.brandOption =function(value){
    var BrandTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'brand\'}"]'));
        BrandTab.getText().then(function(text){
			expect(text).toContain("Brand");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Brand tab');
			BrandTab.click();
        });
        
        //Check search bar
        var searchBox= element(by.model('pFilter.category_search'));
        expect(searchBox.isDisplayed()).toBe(true);
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion
        var searchElem = element(by.css('div[ng-click="pFilter.addFilter(data)"]')); 
        searchElem.getText().then(function(text){
			expect(text).toContain("Silver");
			console.log('text contains: ',text);
        });
        
        searchElem.click(); 
   };

   this.colorOption = function(value){
    var ColourTab= element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'color\'}"]'));
        ColourTab.getText().then(function(text){
			expect(text).toContain("Colour");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on Colour tab');
			ColourTab.click();
        });
        
        //Check search bar
        var searchBox= element(by.model('pFilter.category_search'));
        expect(searchBox.isDisplayed()).toBe(true);
        searchBox.click();
        
        //Search keys and click
        searchBox.sendKeys(value);
        
        //Search Assertion
        var searchElem = element(by.css('div[ng-click="pFilter.addFilter(data)"]')); 
        searchElem.getText().then(function(text){
			expect(text).toContain("Black");
			console.log('text contains: ',text);
        });
        
        searchElem.click(); 
   };

   this.clickFromDate =  function(){

       var dateTab =element(by.css('div[ng-class="{\'selected\': pFilter.filter_case === \'createdAt\'}"]')).click();
        dateTab.getText().then(function(text){
			expect(text).toContain("Date");
			console.log('Tab found: ', text); 
		  
			//click on Category Tab
			console.log('Clicking on date tab');
			
        });
        // dateTab.click();
        
	  //selects From date
	   element(by.css('input[dp-model="pFilter.dateFilter.start_date"]')).click();
       element(by.css('div[class="picker__nav--prev"]')).click();

	   
	   //selects previous month's date
	   var selElem = element(by.css('div[class="picker__day picker__day--infocus"]')); 
	   browser.actions().mouseMove(selElem).perform();  
	   selElem.click(); 
   };

   this.clickToDate = function(){
      //selects To Date
      element(by.css('input[dp-model="pFilter.dateFilter.end_date"]')).click();
      console.log('clicked to date option');
       
       //selects today's date
       var selElem = element(by.css('div[class="picker__day picker__day--infocus picker__day--today picker__day--highlighted"]')); 
	   browser.actions().mouseMove(selElem).perform();  
       console.log('clicking element');
	   selElem.click();
	  
   };
	 
	 
    this.clickApply = function(){
        element(by.css('div[class="col s6 apply"]')).click();
        console.log('Applying filter');
    };
   
};
module.exports = new FilterPageObject();
