// Actions: POST
// just deals with various actions and then redirects accordingly with session stuff stored to
export function actionsGet(req, res) {
  let action, type, searchTerm, redirectPath, referrer, status, id, trainingEndDate, todayDate, months;

  action = req.param('action');
  // type = req.param('type');
  status = req.param('status');
  id = req.param('id');
  referrer = req.headers.referer;
  redirectPath = referrer;

  // date if required
  todayDate = new Date();
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  trainingEndDate = todayDate.getDate() + ' ' + months[todayDate.getMonth()] + ' ' + todayDate.getFullYear();
  req.session.trainingEndDate = trainingEndDate;

  console.log('action = ' + action);
  console.log('id = ' + id);
  console.log('referrer = ' + referrer);

  if (action === 'addedToLearningPlan') {
    req.session.addedToLearningPlan = true;
    redirectPath = '/prototypes/learner/v7/home';
  }

  if (action === 'removedFromLearningPlan' && status === 'started') {
    // req.session.removedFromLearningPlan = true;
    req.session.removedFromLearningPlanWarning = true;
    redirectPath = '/prototypes/learner/v7/home';
  }

  if (action === 'removedFromLearningPlan' && status !== 'started') {
    req.session.removedFromLearningPlan = true;
    // req.session.removedFromLearningPlanWarning = true;
    redirectPath = '/prototypes/learner/v7/home';
  }

  if (action === 'completeFireTraining' && id === '15') {
    req.session.fireTrainingComplete = true;
    req.session.fireTrainingCompleteBanner = true;
    redirectPath = '/prototypes/learner/v7/scorms/basic-fire-safety/complete';
  }

  // removedFromSuggestedList
  if (action === 'removedFromSuggestedList') {
    req.session.removedFromSuggestedList = true;
    redirectPath = '/prototypes/learner/v7/home';
  }

  // hasLeftFeedback from feedback page
  if (action === 'hasLeftFeedback') {
    req.session.hasLeftFeedback = true;
    // redirectPath = '/prototypes/learner/v7/learning-record';
    redirectPath = '/prototypes/learner/v7/home';
  }

  // work area/job title has been updated
  if (action == 'workAreaHasBeenUpdated') {
    req.session.workAreaHasBeenUpdated = true;
    req.session.showUpdatedPrimaryWorkArea = true;
    console.log('workAreaHasBeenUpdated!!!!');
    redirectPath = '/prototypes/learner/v7/your-profile';
  }

  return res.redirect(redirectPath);
}

export function actionsPost(req, res) {
  const { action, type } = req.body;

  //let searchTerm, redirectPath;

  /*if (action === 'addedToLearningPlan') {
          req.session.addedToLearningPlan = true;
          // req.session.hasBeenAddedType = true;
          redirectPath = '/prototypes/learner/v7/suggested-learning';
      }*/

  return res.redirect(redirectPath);
}
