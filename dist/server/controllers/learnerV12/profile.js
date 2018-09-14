'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileNameGet = profileNameGet;
exports.profileNamePost = profileNamePost;
exports.profileEmailGet = profileEmailGet;
exports.profileEmailPost = profileEmailPost;
exports.profilePasswordGet = profilePasswordGet;
exports.profilePasswordPost = profilePasswordPost;
exports.profileOrganisationGet = profileOrganisationGet;
exports.profileOrganistionPost = profileOrganistionPost;
exports.profileOrganisationSubDivisionsGet = profileOrganisationSubDivisionsGet;
exports.profileOrganisationSubDivisionsPost = profileOrganisationSubDivisionsPost;
exports.profilePrimaryGet = profilePrimaryGet;
exports.profilePrimaryPost = profilePrimaryPost;
exports.profilePrimaryOpsDelGet = profilePrimaryOpsDelGet;
exports.profilePrimaryOpsDelPost = profilePrimaryOpsDelPost;
exports.profileOthersGet = profileOthersGet;
exports.profileOthersPost = profileOthersPost;
exports.profileInterestsGet = profileInterestsGet;
exports.profileInterestsPost = profileInterestsPost;
exports.profileGradeGet = profileGradeGet;
exports.profileGradePost = profileGradePost;

var _validationFunctions = require('./validation-functions');

let generalData = require('./data'); // import generic validation functions

let profileURL = '/prototypes/learner/v12/your-profile';

// **************************************************************************************
// Name: change name
// **************************************************************************************
function profileNameGet(req, res) {
  let viewData, navItem, showNewNav;

  showNewNav = true;
  navItem = 'profile';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/profile/name', viewData);
}

// Email: POST
function profileNamePost(req, res) {
  const { firstName, lastName } = req.body;

  console.log('firstName = ' + firstName);
  req.session.firstName = firstName;
  req.session.combinedName = firstName + ' ' + lastName;
  req.session.anythingUpdated = true;
  return res.redirect(profileURL);
}

// **************************************************************************************
// Email
// **************************************************************************************
function profileEmailGet(req, res) {
  let viewData, navItem, showNewNav;

  showNewNav = true;
  navItem = 'profile';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/profile/email', viewData);
}

// Email: POST
function profileEmailPost(req, res) {
  const { email } = req.body;

  req.session.anythingUpdated = true;
  req.session.email = email;

  return res.redirect(profileURL);
}

// **************************************************************************************
// Password
// **************************************************************************************
function profilePasswordGet(req, res) {
  let viewData, navItem, showNewNav;

  showNewNav = true;
  navItem = 'profile';

  viewData = {
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/profile/password', viewData);
}

// Email: POST
function profilePasswordPost(req, res) {
  const {} = req.body;

  return res.redirect(profileURL);
}

// **************************************************************************************
// Organisation
// **************************************************************************************
function profileOrganisationGet(req, res) {
  let viewData, navItem, showNewNav, departmentSelectOptions;

  showNewNav = true;
  navItem = 'profile';

  departmentSelectOptions = generalData.allDepartments;

  viewData = {
    showNewNav,
    navItem,
    departmentSelectOptions
  };

  return res.render('prototypes/learner/v12/profile/organisation', viewData);
}

// Org POST
function profileOrganistionPost(req, res) {
  const { organisation } = req.body;

  console.log(req.body);

  let department, departmentSelectOptions, subDivisionData;

  departmentSelectOptions = generalData.allDepartments;
  department = departmentSelectOptions[organisation].text;

  if (department === '') {
    profileURL = '/prototypes/learner/v12/your-profile/organisation';
  } else if (department === 'DWP') {
    profileURL = '/prototypes/learner/v12/your-profile/organisation/sub-divisions';
  }
  req.session.subDivision = subDivision;
  req.session.anythingUpdated = true;
  req.session.departmentName = department;

  return res.redirect(profileURL);
}

// Organisation sub divisions

function profileOrganisationSubDivisionsGet(req, res) {
  let viewData, navItem, showNewNav, departmentSelectOptions, profileSubDivision, subDivisionData;

  showNewNav = true;
  navItem = 'profile';

  subDivisionData = generalData.allSubDivisionsDWP;

  // profileSubDivision = eval('generalData.' + );

  viewData = {
    showNewNav,
    navItem,
    departmentSelectOptions,
    profileSubDivision
  };

  return res.render('prototypes/learner/v12/profile/organisation', viewData);
}

function profileOrganisationSubDivisionsPost(req, res) {
  const { organisation } = req.body;

  console.log(req.body);

  let department, departmentSelectOptions;

  departmentSelectOptions = generalData.allDepartments;
  department = departmentSelectOptions[organisation].text;

  if (department === '') {
    profileURL = '/prototypes/learner/v12/your-profile/organisation';
  }

  req.session.anythingUpdated = true;
  req.session.departmentName = department;

  return res.redirect(profileURL);
}
// **************************************************************************************
// Primary area of work
// **************************************************************************************
function profilePrimaryGet(req, res) {
  let viewData, navItem, showNewNav, profilePrimary;

  showNewNav = true;
  navItem = 'profile';

  profilePrimary = generalData.allNewAreasOfWork;

  viewData = {
    showNewNav,
    navItem,
    profilePrimary
  };

  return res.render('prototypes/learner/v12/profile/primary', viewData);
}

// primary: POST
function profilePrimaryPost(req, res) {
  const { primary } = req.body;

  let primaryChoice, newRedirectURL;

  primaryChoice = primary;

  if (primaryChoice === 'Operational delivery') {
    newRedirectURL = '/prototypes/learner/v12/your-profile/primary/operational-delivery';
  } else {
    req.session.primaryOpsDelChoiceArray = null;
    newRedirectURL = profileURL;
  }

  req.session.anythingUpdated = true;
  req.session.primaryChoice = primaryChoice;
  console.log(primary);

  return res.redirect(newRedirectURL);
}

// **************************************************************************************
// Primary area of work OPERATIONAL DELIVERY
// **************************************************************************************
function profilePrimaryOpsDelGet(req, res) {
  let viewData, navItem, showNewNav, profilePrimaryOpsDel;

  showNewNav = true;
  navItem = 'profile';

  profilePrimaryOpsDel = generalData.detailsOpsDel;

  viewData = {
    showNewNav,
    navItem,
    profilePrimaryOpsDel
  };

  return res.render('prototypes/learner/v12/profile/primary-opsdel', viewData);
}

// primary: POST
function profilePrimaryOpsDelPost(req, res) {
  const { detailsOpsDel } = req.body;

  let primaryOpsDelChoice,
      primaryOpsDelChoiceArray = [];

  primaryOpsDelChoice = detailsOpsDel;
  console.log(primaryOpsDelChoice);

  if (primaryOpsDelChoice) {
    if (typeof primaryOpsDelChoice === 'string' || primaryOpsDelChoice instanceof String) {
      primaryOpsDelChoiceArray.push(primaryOpsDelChoice);
    } else if (primaryOpsDelChoice.length > 0) {
      primaryOpsDelChoiceArray = primaryOpsDelChoice;
    }
  } else {
    primaryOpsDelChoiceArray = ['Unknown'];
  }

  req.session.anythingUpdated = true;
  req.session.primaryOpsDelChoiceArray = primaryOpsDelChoiceArray;

  return res.redirect(profileURL);
}

// **************************************************************************************
// Other areas of work
// **************************************************************************************
function profileOthersGet(req, res) {
  let viewData, navItem, showNewNav, profileOthers;

  showNewNav = true;
  navItem = 'profile';

  profileOthers = generalData.allNewAreasOfWork;

  // console.log(profileOthers);

  viewData = {
    showNewNav,
    navItem,
    profileOthers
  };

  return res.render('prototypes/learner/v12/profile/others', viewData);
}

// Other: POST
function profileOthersPost(req, res) {
  const { others } = req.body;

  let profileOthersSelected,
      profileOthersArray = [];

  profileOthersSelected = others;

  if (profileOthersSelected) {
    if (typeof profileOthersSelected === 'string' || profileOthersSelected instanceof String) {
      profileOthersArray.push(profileOthersSelected);
    } else if (profileOthersSelected.length > 0) {
      profileOthersArray = profileOthersSelected;
    }
  } else {
    profileOthersArray = ['Unknown'];
  }

  req.session.anythingUpdated = true;
  req.session.profileOthers = profileOthersArray;

  return res.redirect(profileURL);
}

// **************************************************************************************
// Interests
// **************************************************************************************
function profileInterestsGet(req, res) {
  let viewData, newCoreInterests, navItem, showNewNav;

  showNewNav = true;
  navItem = 'profile';

  newCoreInterests = generalData.newCoreInterests;

  viewData = {
    newCoreInterests,
    showNewNav,
    navItem
  };

  return res.render('prototypes/learner/v12/profile/interests', viewData);
}

// interests: POST
function profileInterestsPost(req, res) {
  const { extraInterests } = req.body;

  let newCoreInterests,
      profileInterestsArray = [];

  newCoreInterests = generalData.newCoreInterests;

  // console.log('extraInterests.length = ' + extraInterests.length);

  if (extraInterests) {
    if (typeof extraInterests === 'string' || extraInterests instanceof String) {
      profileInterestsArray.push(newCoreInterests[parseInt(extraInterests)].text);
    } else if (extraInterests.length > 0) {
      for (let i = 0; i < extraInterests.length; i++) {
        profileInterestsArray.push(newCoreInterests[parseInt(extraInterests[i])].text);
      }
    }
  } else {
    profileInterestsArray = ['Unknown'];
  }

  req.session.anythingUpdated = true;
  req.session.profileInterestsArray = profileInterestsArray;
  // profileURL = '/prototypes/learner/v12/your-profile/core-interests';

  return res.redirect(profileURL);
}

// **************************************************************************************
// Grade
// **************************************************************************************
function profileGradeGet(req, res) {
  let viewData, navItem, showNewNav, profileGrades;

  showNewNav = true;
  navItem = 'profile';

  profileGrades = generalData.allGrades;
  console.log(profileGrades);

  viewData = {
    showNewNav,
    navItem,
    profileGrades
  };

  return res.render('prototypes/learner/v12/profile/grade', viewData);
}

// Email: POST
function profileGradePost(req, res) {
  const { grades } = req.body;

  let profileGrades, isHEO, isG6;

  profileGrades = grades;
  console.log(profileGrades);

  if (profileGrades === 'Higher executive officer') {
    req.session.isHEO = true;
  }

  if (profileGrades === 'Grade 6') {
    req.session.isG6 = true;
  }

  req.session.anythingUpdated = true;
  req.session.profileGrades = profileGrades;

  return res.redirect(profileURL);
}