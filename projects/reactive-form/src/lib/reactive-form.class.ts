export class DefaultReactiveForm {
  constructor(
    formSubmitButtonTitle = 'Submit',
    formSubmitButtonDisabledInit = false,
    formSubmitButtonPreventClick = true,
    formSubmitButtonExtraClass = '',
    formSubmitHidden = false,
    formMatchField = [],
    formRequiredSymbol = '*',
    config = [] ) {
    return {
      form: {
        submitButton: {
          title: formSubmitButtonTitle,
          disabledInit: formSubmitButtonDisabledInit,
          preventClick: formSubmitButtonPreventClick,
          extraClass: formSubmitButtonExtraClass,
          hidden: formSubmitHidden
        },
        matchField: formMatchField,
        requiredSymbol: formRequiredSymbol
      },
      config: config
    };
  }
}
