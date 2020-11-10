// WARNING: this is a very hacky solution for dynamic base URLs
//  want to avoid individual builds for each deployment...
//  this solution seems better than injecting the base URL from
//  the webserver into the template.
export const getWebRoot = function() {
  const urlPath = document.location.pathname;
  return urlPath.split('__APP_NAME__')[0] + '__APP_NAME__'
};