Package.describe({
  name: 'example-membership',
});

Package.onUse(function (api) {
  api.use([
    'promise',

    // vulcan core
    'vulcan:core@=1.16.1',

    // vulcan packages
    'vulcan:forms@=1.16.1',
    'vulcan:accounts@=1.16.1',
    'vulcan:forms-upload@=1.16.1',
    'vulcan:payments@=1.16.1',
    'vulcan:ui-bootstrap@=1.16.1',

    // third-party packages
    'fourseven:scss@4.12.0',
  ]);

  api.addFiles('lib/stylesheets/style.scss');

  api.addAssets(['lib/static/vulcanstagram.png'], ['client']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
