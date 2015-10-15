var Backbone = require('backbone');
var _ = Backbone._;
var Settings = require('../../Settings');

var Model = Backbone.Model.extend({
  urlRoot: Settings.REST + 'search/advanced-search?rand=123'
});

var Collection = Backbone.Collection.extend({
  model: Model,
  url: Settings.REST.root + 'search/advanced-search?rand=123',
});

_.extend(Collection.prototype, {
  getUsersHome: function (collection, context) {
    var theRoles = [];
    _.map(this.models, function (model) {
      var roles = _.pluck(model.get('roles'), 'rid');
      if (roles.indexOf('9') > 0) {
        theRoles.push(model);
      }
    });

    return theRoles;
  }
});

module.exports = {
  model: Model,
  collection: Collection
};