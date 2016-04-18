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
        event = event || window.event;
        let $target = $(event.target)

        this.visibleInput = val;

        if (val) {
            this._timeout(() => {
                if (!!$target)
                    $target.parents(".report-form-input").find(".active-input").focus();
            });
        } else {
            this.labelStyle["border-color"] = "#fff";
        }

    }
    
    onBlur(val, event){
        this.displayInput(val, event);
        this.onSave(this.report);
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
        return (this.report.name.get() == false || this.report.name.get() == null);
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
