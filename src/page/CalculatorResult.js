var CalculatorResult = function(){

    var resultBinding  = element(by.binding('latest'));

    // this.selectFromDropDown = function(){
    //     element(by.model('name')).$('[value="' + index + '"]').click();
    // }

    /**
     *
     * @returns {webdriver.promise.Promise<string>}
     */
    this.getResultText = function(){
                resultBinding.getText().then(function(text) {
            console.log("Result:= " + text);
        });
        return resultBinding.getText();
        // OR
        // var text = resultBinding.getText()
        // console.log("Result:= " + text);
        // return text;
    };

};

module.exports = new CalculatorResult();
