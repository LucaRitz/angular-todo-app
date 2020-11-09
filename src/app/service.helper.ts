export function getAuthHeader(user): string {
  return 'Basic ' + btoa(user.name + ':' + user.password);
}
