var Backbone = require('backbone');
var _ = Backbone._;
var Settings = require('../../Settings');

var Model = Backbone.Model.extend({
  urlRoot: Settings.REST + 'users',
  idAttribute: 'uid'
});

var Collection = Backbone.Collection.extend({
  model: Model,
  url: Settings.REST.root + 'users',
});

module.exports = {
  model: Model,
  collection: Collection
};