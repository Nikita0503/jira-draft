export const handleErrorResponse = (e: any) => {
  const errorDetails = e.response.data;
  let errorText = '';
  if (errorDetails.message) {
    errorText = errorText + `${errorDetails.message}. `;
  }
  if (errorDetails.errors) {
    for (let i = 0; i < errorDetails.errors.length; i++) {
      errorText =
        errorText +
        `\n${errorDetails.errors[i].param}: ${errorDetails.errors[i].msg}. `;
    }
  }
  alert(errorText);
};
