// Robots
export const robots = (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
};

// Index Route
export const index = (req, res) => {
  let viewData = {
    contentHeader: {
      type: 'MOT testing service',
      title: 'Design System',
    },
    pageTitle: 'MOT testing service Design System',
    loggedOut: true,
    designSystem: true,
  };

  res.render('main/index', viewData);
};
