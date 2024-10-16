Package.describe({
  name: 'example-customization',
});

Package.onUse(function (api) {
  api.use(['vulcan:core@=1.16.1', 'example-forum@=1.16.1', 'fourseven:scss@4.12.0']);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');

  api.addFiles(['lib/stylesheets/custom.scss'], ['client']);

  api.addAssets(
    ['lib/server/emails/customNewPost.handlebars', 'lib/server/emails/customEmail.handlebars'],
    ['server']
  );
});
