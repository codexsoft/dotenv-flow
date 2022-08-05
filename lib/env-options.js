'use strict';

/**
 * @type {{DOTENV_FLOW_ENCODING: string, DOTENV_FLOW_PATH: string, DOTENV_FLOW_PURGE_DOTENV: string, NODE_ENV: string, DEFAULT_NODE_ENV: string, DOTENV_FLOW_SILENT: string}}
 */
const ENV_OPTIONS_MAP = {
  NODE_ENV: 'node_env',
  DEFAULT_NODE_ENV: 'default_node_env',
  DOTENV_FLOW_PATH: 'path',
  DOTENV_FLOW_ENCODING: 'encoding',
  DOTENV_FLOW_PURGE_DOTENV: 'purge_dotenv',
  DOTENV_FLOW_SILENT: 'silent',
  LOAD_ENV_LOCAL_IN_TEST_ENV: 'load_env_local_in_test_env',
};

/**
 * Get environment variable defined options for `dotenv-flow#config()`.
 *
 * @param {object} [env=process.env]
 * @return {{node_env?: string, default_node_env?: string, path?: string, encoding?: string, purge_dotenv?: string, silent?: string}}
 */
module.exports = function env_options(env = process.env) {
  return Object.keys(ENV_OPTIONS_MAP)
    .reduce((options, key) => {
      if (key in env) {
        options[ ENV_OPTIONS_MAP[key] ] = env[key];
      }
      return options;
    }, {});
};
