var FilterPageObject = function(){
  
	this.login =function(){
      browser.get('http://blubox.shoppinpal.com/seller/sell/products');
		element(by.model('login.username')).sendKeys('9876543212');
		var passrd = element(by.model('login.password')).sendKeys('priyanka');
		passrd.sendKeys(protractor.Key.ENTER);
		element(by.css('a[href="/seller/sell/gallery"]')).click();
	};
	
	this.clickFilter = function(){
		//click on filter option
       element(by.css('div#gallery-filter')).click();
    };
	
	this.filterMenu = function(){
	  //Check Filter menu slider appears
      var filterSlider = element(by.css('div.header'));
      expect(filterSlider.isDisplayed()).toBe(true);
       
      //Display Header text
      filterSlider.getText().then(function(text){
          expect(text).toContain("FILTER BY");
          console.log('Filter header text is equal to ', text);
          });
             
      //Try to click on it
      filterSlider.click();
	};
    
   this.clickTagsIcon = function(){
      var tags= element(by.css('div[ng-click="galleryFilter.selectedFilter=\'tags\'"]'));
      tags.click();
      console.log('Clicking on Tags tab');
   };
   
   this.clickTagOption =  function(value){
	 if(value === "PRODUCTS")
		var tagElem = element.all(by.repeater('tag in galleryFilter.providedFilterTags')).get(0);
	 else
		var tagElem = element.all(by.repeater('tag in galleryFilter.providedFilterTags')).get(1);
     
	 tagElem.click();
	 };
     
    this.clickApply = function(){
        element(by.css('div[class="col s6 apply"]')).click();
        console.log('Applying filter');
    };
};
module.exports = new FilterPageObject();