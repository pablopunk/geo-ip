# geo-ip [Build Status](https://travis-ci.org/pablopunk/geo-ip.png?branch=master)](https://travis-ci.org/pablopunk/geo-ip)

## Install

```sh
npm install @pablopunk/geo-ip
```

## Usage

```javascript
const geoIp = require('@pablopunk/geo-ip');

// Example retrieve IP from request
// const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

const result = geoIp({ip:'46.19.37.108'})
});
```

## Return

```json
{
    "ip": "46.19.37.108",
    "continent_code": "EU",
    "continent": {
      "de": "Europa",
      "en": "Europe"
    },
    "country_code": "NL",
    "country": {
      "de": "Niederlande",
      "en": "Netherlands"
    },
    "latitude": 52.5,
    "longitude": 5.75,
    "timezone":"Europe/Amsterdam"
}
```

Details

- **ip** (Visitor IP address, or IP address specified as parameter)
- **country_code** (Two-letter ISO 3166-1 alpha-2 country code)
- **country** (Names of the country)
- **continent** (Names of the continent)
- **continent_code** (Two-letter continent code)
- **latitude** (Latitude)
- **longitude** (Longitude)
- **timezone** (Time Zone)

## Options

- **ip** : IPV4 better.
- **timeout** : default 1000ms

## License

> Forked from [darul75/satelize](https://github.com/darul75/satelize)

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
