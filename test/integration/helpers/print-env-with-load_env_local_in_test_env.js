'use strict';

require('../../../lib/dotenv-flow').config({
  load_env_local_in_test_env: true
});

console.log(JSON.stringify(process.env));
