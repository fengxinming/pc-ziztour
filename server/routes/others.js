'use strict';

module.exports = (router, controllers) => {

  router.get('/others/index.html', controllers.others.index);

  router.get('/others/experiences.html', controllers.others.experiences);

  router.get('/others/services.html', controllers.others.services);

  router.get('/others/culture.html', controllers.others.culture);

  router.get('/others/business.html', controllers.others.business);

  router.get('/others/team.html', controllers.others.team);

  router.get('/others/contact.html', controllers.others.contact);

};
