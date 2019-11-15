export class DefaultReactiveForm {
  constructor(
    formSubmitButtonTitle = 'Submit',
    formSubmitButtonDisabledInit = false,
    formSubmitButtonPreventClick = true,
    formSubmitButtonExtraClass = '',
    formMatchField = [],
    config = [] ) {
    return {
      form: {
        submitButton: {
          title: formSubmitButtonTitle,
          disabledInit: formSubmitButtonDisabledInit,
          preventClick: formSubmitButtonPreventClick,
          extraClass: formSubmitButtonExtraClass,
        },
        matchField: formMatchField
      },
      config: config
    };
  }
}
