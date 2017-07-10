var FilterPageObject = function(){
  
  this.login =function(){
      browser.get('http://blubox.shoppinpal.com/seller/sell/products');
		element(by.model('login.username')).sendKeys('9876543212');
		var passrd = element(by.model('login.password')).sendKeys('priyanka');
		passrd.sendKeys(protractor.Key.ENTER);
		element(by.css('a[href="/seller/sell/gallery"]')).click();
	};	
  
  this.clickFilterIcon = function(){
       var filterMenu= element(by.css('div#gallery-filter'));
       filterMenu.click(); 
       /*var filterHeader=filterMenu.getText();
       expect(filterHeader).toBe('FILTER BY');
       console.log(filterHeader);*/
   };
    
   this.clickDate = function(){
      var date= element(by.css('div[ng-click="galleryFilter.selectedFilter=\'date\'"]'));
      date.click();
      console.log('Clicking on Date tab');
   };
   
   
   this.clickFromDate =  function(){
	 element(by.css('input[dp-model="galleryFilter.filterData.startDate"]')).click();
	 element(by.css('div[class="picker__nav--prev"]')).click();
	 var selElem = element(by.css('div[class="picker__day picker__day--infocus"]'));
		 browser.actions().mouseMove(selElem).perform();  
		 selElem.click();
	    };
   
   this.clickToDate =  function(){
      element(by.css('input[dp-model="galleryFilter.filterData.endDate"]')).click();
	  element.all(by.css('button[type="button"]')).getText().then(function(text){
		  text.toContain('Today');
// 		  console.log(text);
	  });
	  var dateElem= element.all(by.css('div[class="picker__footer"]')).$('button[class="btn-flat picker__today"]'); //should work
	  
	  var selElem = element(by.cssContainingText('.btn-flat picker__today','Today'));
// 	  var selElem = element(by.buttonText('Today')).click();
	  
	  selElem.click();
	  dateElem.click();	  
	  browser.sleep(5000);
   };
	 
	 
    this.clickApply = function(){
        element(by.css('div[class="col s6 apply"]')).click();
        console.log('Applying filter');
    };
   
};
module.exports = new FilterPageObject();
