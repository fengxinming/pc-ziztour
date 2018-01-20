'use strict';

module.exports = (router, controllers) => {

  router.get('/tech-travel/index.html', controllers.techTravel.index);

  router.get('/tech-travel/project-cases.html', controllers.techTravel.projectCases);

  router.get([
    '/tech-travel/services.html',
    '/tech-travel/services/distribution.html',
    '/tech-travel/services/government.html'
  ], controllers.techTravel.services);

};
