'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var required = exports.required = function required(value) {
  return value ? undefined : 'Required';
};

var validPassword = exports.validPassword = function validPassword(value) {
  if (value.length < 8) {
    return 'Password must contain at least 8 characters';
  }

  return null;
};

var isUrl = function isUrl(str) {
  /* eslint-disable no-useless-escape */
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(str);
};

var email = exports.email = function email(v) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(v);
};

var url = exports.url = function url(value) {
  return isUrl(value) ? null : 'Invalid Url';
};

var uuid = exports.uuid = function uuid(v) {
  var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return !re.test(v);
};

exports.default = {
  required: required,
  url: url,
  email: email,
  uuid: uuid
};