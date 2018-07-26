'use strict'

const Model = use('Model')

class Property extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Property
