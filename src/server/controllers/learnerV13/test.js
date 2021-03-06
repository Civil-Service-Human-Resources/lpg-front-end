let generalData = require('./data');
let orgsData = require('./all-orgs');

// Selecta test pages
export function selectaTestRadiosGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/selectas/radios', viewData);
}

export function selectaTestSelectGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/selectas/select', viewData);
}

export function selectaTestTypeaheadGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/selectas/typeahead', viewData);
}

export function selectaTestMegaListGet(req, res) {
  let viewData, showNewNav, navItem, profilePrimary;

  showNewNav = req.session.showNewNav;
  navItem = '';

  profilePrimary = orgsData.allOrgsAndSubDivisions;

  viewData = {
    profilePrimary,
    showNewNav,
    navItem,
  };

  return res.render('prototypes/learner/v13/selectas/all', viewData);
}
