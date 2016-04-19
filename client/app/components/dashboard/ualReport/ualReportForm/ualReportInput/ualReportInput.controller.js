class ualReportInputController {
    /*@ngInject*/
    constructor($timeout) {
        this._timeout = $timeout;
        this.name = 'ualReportInput';
        this.visibleInput = false;
        this.inputId = "reportName";
        this.firstTime = !this.report.name.get();
        this.labelStyle = {};
    }

    displayInput(val, event) {
        this.visibleInput = val;
        let $target = $(event.target);
        if (!val) {
            this.labelStyle["border-color"] = "#fff";
        } else{
            this._timeout(() => {
                if (!!$target){
                    $target.parents(".report-form-input").find(".active-input").focus();
                }
            });
        }

    }
    
    onBlur(event){
        this.displayInput(false, event);
        this.onSave();
    }

    onMouse(val) {
        this.isOverInput = val;
        this.labelStyle["border-color"] = this.isOverInput ? "#d4d4d4" : "#fff";
    }

    labelText() {
        return this.report.name.get() ? this.report.name.get() : 'Enter report name';
    }
    checkEnter(event) {
        this.firstTime = false;
        if ((event.which | event.keyCode) === 27 || (event.which | event.keyCode) === 13) { // 27 = esc key
            event.preventDefault();
            event.target.blur();
        }
    }

    checkEmptyName() {
        return (!this.report.name.get());
    }
    errorThrown() {
        if (this.invalidInput) {
            this.visibleInput = true;
            return true;
        }
        return false;
    }
}

export default ualReportInputController;
