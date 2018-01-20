'use strict';

module.exports = (router, controllers) => {

  router.get('/travel/index.html', controllers.travel.index);

};
