export class DefaultReactiveForm {
  constructor(
    formSubmitButtonTitle = 'Submit',
    formSubmitButtonDisabledInit = false,
    formSubmitButtonPreventClick = true,
    formSubmitButtonExtraClass = '',
    formSubmitHidden = false,
    formMatchField = [],
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
        matchField: formMatchField
      },
      config: config
    };
  }
}
