const mmdbreader = require('maxmind-db-reader')

class Satelize {
  constructor () {
    this.db = mmdbreader.openSync(`${__dirname}/DB/20171003/GeoLite2-City.mmdb`)
    require('auto-bind')(this)
  }

  get (options) {
    const data = this.db.getGeoDataSync(options.ip)
    return {
      ip: options.ip,
      continent_code: data.continent.code,
      continent: data.continent.names,
      country_code: data.country.iso_code,
      country: data.country.names,
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      timezone: data.location.time_zone
    }
  }
}

const sat = new Satelize()

module.exports = sat.get
