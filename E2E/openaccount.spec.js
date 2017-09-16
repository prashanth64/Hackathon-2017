describe('Testing openaccount page', function() {
	beforeEach(function(){
		browser.get('http://localhost:3000/#/openAccount');
	});
 it('name should be Open Fixed Savings', function() {
 
   var text = element(by.id('openfixedsavings'));
     text.getText().then(function(data){
		 expect(data).toEqual("Open Fixed Savings");
	 })
  });
  it('heading should be Open Business Account',function(){
	  var text = element(by.id('openbusinessaccount'));
     text.getText().then(function(data){
		 expect(data).toEqual("Open Business Account");
	 })
  });
});