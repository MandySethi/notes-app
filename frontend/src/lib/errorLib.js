export function onError(error) {
  let message = error.toString();

  //Auth errors
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }
  console.log(Error);
  alert(message);
}
