'use strict';

module.exports = (router, controllers) => {

  router.get(['/', '/index.html'], controllers.home.index);

};
