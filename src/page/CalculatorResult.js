var CalculatorResult = function(){

    var resultBinding  = element(by.binding('latest'));

    // this.selectFromDropDown = function(){
    //     element(by.model('name')).$('[value="' + index + '"]').click();
    // }

    this.getResultText = function(){
                resultBinding.getText().then(function(text) {
            console.log("Result:= " + text);
            return resultBinding.getText()
        });
    };

};

module.exports = new CalculatorResult();
