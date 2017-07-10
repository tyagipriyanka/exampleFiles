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
	
	this.clickImageTab = function(){
		//Check on Images tab
       var imageTab= element(by.css('div[class="col s10 selected"]'));
       imageTab.getText().then(function(text){
			expect(text).toEqual("Images");
			console.log(text); 
		  
			//click on Images Tab
			imageTab.click();
        });
	};
	
	this.clickUsedImage = function(){
	//Click on Used Image
        var usedImage= element(by.css('label[for="used"]')); 		//Instead of looping
        console.log(usedImage);
		usedImage.click();
	};
	
	this.clickUnusedImage = function(){
	//Click on Unused Image
        var UnusedImage= element(by.css('label[for="new"]'));       //Instead of looping
        console.log(UnusedImage);
		UnusedImage.click();
	};
	
	this.clickApply = function(){
		//Click on APPLY button
        element(by.css('div[class="col s6 apply"]')).click();
        console.log('Applying filter for Unused Image');
    };
	
};
module.exports = new FilterPageObject();