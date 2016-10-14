import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'corejs-typeahead': '0.11.x'
}, 'test:test');