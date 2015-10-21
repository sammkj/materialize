Package.describe({
  name: 'kingsman:styling',
  summary: 'Materialize (official): A modern responsive front-end framework based on Material Design',
  version: '0.97.2',
  git: 'https://github.com/Dogfalo/materialize.git'
});

Package.onUse(function (api) {
  api.versionsFrom('Meteor@1.2.0');

  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  
  api.addFiles([
    'dist/js/materialize.js',
    'dist/css/materialize.css'
  ], 'client');

  api.export('Materialize', 'client');
});
