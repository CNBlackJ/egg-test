/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558619771703_8553';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: [ 'http://localhost:5000' ]
};

exports.cors = {
  origin: 'http://localhost:5000',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
};
