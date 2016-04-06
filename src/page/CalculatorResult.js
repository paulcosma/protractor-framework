var CalculatorResult = function(){

    var resultBinding  = element(by.binding('latest'));

    // this.selectFromDropDown = function(){
    //     element(by.model('name')).$('[value="' + index + '"]').click();
    // }

    this.getResultText = function(){
        // return resultBinding.getText()
        return resultBinding.getText().then(function(text) {
            console.log("Result:= " + text);
        });
    };

};

module.export = new CalculatorResult();
