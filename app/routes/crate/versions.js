import Ember from 'ember';
import Crate from 'cargo/models/crate';

export default Ember.Route.extend({
    afterModel: function(data) {
        if (data instanceof Crate) {
            return data.get('versions');
        } else {
            return data.crate.get('versions');
        }
    },

    setupController: function(controller, data) {
        if (data instanceof Crate) {
            data = {crate: data, version: null};
        }
        this._super(controller, data.crate);
    },
});
