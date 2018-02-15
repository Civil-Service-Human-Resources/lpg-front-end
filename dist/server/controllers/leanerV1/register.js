'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerEmailGet = registerEmailGet;
exports.registerEmailPost = registerEmailPost;
exports.registerPersonalGet = registerPersonalGet;
exports.registerPersonalPost = registerPersonalPost;
exports.registerJobGet = registerJobGet;
exports.registerJobPost = registerJobPost;
exports.registerReviewGet = registerReviewGet;
exports.registerReviewPost = registerReviewPost;
exports.registerCompleteGet = registerCompleteGet;

var _validationFunctions = require('./validation-functions');

// **************************************************************************************
// Email: GET
// **************************************************************************************
function registerEmailGet(req, res) {
  let viewData, email, registrationEmailError, registrationEmailErrorMessage;

  email = req.session.email;
  registrationEmailError = req.session.registrationEmailError;
  registrationEmailErrorMessage = req.session.registrationEmailErrorMessage;

  viewData = {
    email,
    registrationEmailError,
    registrationEmailErrorMessage
  };

  return res.render('prototypes/learner/v1/registration/index', viewData);
}

// Email: POST
// import generic
function registerEmailPost(req, res) {
  const { email, email2 } = req.body;

  let registrationEmailError, registrationEmailErrorMessage;
  req.session.email = email;

  if (!(0, _validationFunctions.validateEmail)(email)) {
    registrationEmailError = true;
    registrationEmailErrorMessage = 'Enter a valid email';
  }

  if (email !== email2) {
    registrationEmailError = true;
    registrationEmailErrorMessage = 'The email addresses do not match';
  }

  if (registrationEmailError === true) {
    req.session.registrationEmailError = registrationEmailError;
    req.session.registrationEmailErrorMessage = registrationEmailErrorMessage;
    return res.redirect('/prototypes/learner/v1/registration');
  } else {
    req.session.registrationEmailError = '';
    req.session.registrationEmailErrorMessage = '';
    return res.redirect('/prototypes/learner/v1/registration/personal-details');
  }
}
// **************************************************************************************
// Personal details: GET
// **************************************************************************************
function registerPersonalGet(req, res) {
  let viewData, firstName, lastName, phoneNumber, registrationPersonalError;

  firstName = req.session.firstName;
  lastName = req.session.lastName;
  phoneNumber = req.session.phoneNumber;
  registrationPersonalError = req.session.registrationPersonalError;

  viewData = {
    firstName,
    lastName,
    phoneNumber,
    registrationPersonalError
  };

  return res.render('prototypes/learner/v1/registration/personal-details/index', viewData);
}

// Personal details: POST
function registerPersonalPost(req, res) {
  const { firstName, lastName, phoneNumber } = req.body;

  let registrationPersonalError;
  req.session.firstName = firstName;
  req.session.lastName = lastName;
  req.session.phoneNumber = phoneNumber;

  if (!(0, _validationFunctions.validateWord)(firstName) || !(0, _validationFunctions.validateWord)(lastName)) {
    registrationPersonalError = true;
    req.session.registrationPersonalError = registrationPersonalError;
    return res.redirect('/prototypes/learner/v1/registration/personal-details');
  } else {
    return res.redirect('/prototypes/learner/v1/registration/job-details');
  }
}
// **************************************************************************************
// Job details: GET
// **************************************************************************************
function registerJobGet(req, res) {
  let viewData, professionSelectOptions, professionSelectOptions2, departmentSelectOptions;

  //professionSelectOptions = ['Commercial', 'Communications', 'Corporate Finance', 'Digital', 'Finance', 'Fraud, Error, Debt and Grants', 'Human Resources', 'Internal Audit', 'Legal', 'Project Delivery', 'Property'];
  professionSelectOptions2 = [{ value: '', text: 'Select a profession' }, { value: '1', text: 'Commercial' }, { value: '2', text: 'Communications' }, { value: '3', text: 'Corporate Finance' }, { value: '4', text: 'Digital' }, { value: '5', text: 'Finance' }, { value: '6', text: 'Fraud, Error, Debt and Grants' }, { value: '7', text: 'Human Resources' }, { value: '8', text: 'Internal Audit' }, { value: '9', text: 'Legal' }, { value: '10', text: 'Project Delivery' }, { value: '11', text: 'Property' }, { value: '12', text: 'Other' }];

  departmentSelectOptions = [{ value: '', text: 'Select a department' }, { value: '1', text: 'Cabinet Office' }, { value: '2', text: 'Department of Health and Social Care' }, { value: '3', text: 'HM Revenue & Customs' }, { value: '4', text: 'Other' }];

  viewData = {
    professionSelectOptions2,
    departmentSelectOptions
  };

  return res.render('prototypes/learner/v1/registration/job-details/index', viewData);
}

// Job details: POST
function registerJobPost(req, res) {
  const { email, email2 } = req.body;

  let signinError;
}
// **************************************************************************************
// Review GET
// **************************************************************************************
function registerReviewGet(req, res) {
  let viewData;

  return res.render('prototypes/learner/v1/registration/review/index', viewData);
}

// Review: POST
function registerReviewPost(req, res) {
  const { email, email2 } = req.body;

  let signinError;

  // no validation required, just save to session and send on to complete
  return res.redirect('/prototypes/learner/v1/registration/complete');
}
// **************************************************************************************
// Complete GET
// **************************************************************************************
function registerCompleteGet(req, res) {
  return res.render('prototypes/learner/v1/registration/complete/index', viewData);
}