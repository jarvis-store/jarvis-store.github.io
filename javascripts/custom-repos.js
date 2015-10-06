// Opt-in repos (case sensitive)
// - These are all children of master account
var optInRepos = [
  'dashing',
  'active_merchant',
  'liquid',
  'superdb',
  'active_shipping',
  'shopify_app',
  'identity_cache',
  'skeleton-theme',
  'statsd-instrument',
  'shopify_theme',
  'shopify_api',
  'sarama',
  'Timber',
  'shopify-css-import',
  'active_fulfillment',
  'shopify_python_api',
  'wolverine',
  'verdict',
  'shopify_django_app',
  'browser_sniffer',
  'active_utils',
  'embedded-app-example',
  'connect-googleapps',
  'omniauth-shopify-oauth2',
  'shopify-fulfillment-integration',
  'sysv_mq',
  'money',
  'sync_app_demo',
  'rails_parallel',
  'dukpt',
  'splunk-auth-proxy',
  'magnet',
  'goreferrer',
  'asset_cloud',
  'minesweeper',
  'toxiproxy',
  'toxiproxy-ruby',
  'grizzly_ber',
  'semian',
  'go-lua',
  'goluago',
  'shipit-engine'
]


// Add custom repos by full_name. Take the org/user and repo name
// - e.g. batmanjs/batman from https://github.com/batmanjs/batman
var customRepos = [
  'jarvis-theme/playbook',
  'jarvis-theme/babyclothes',
  'jarvis-theme/distroshop',
  'jarvis-theme/electrasol',
  'jarvis-theme/polywhite',
  'jarvis-theme/dcraft',
  'jarvis-theme/shion',
  'jarvis-theme/handicraft',
  'jarvis-theme/leisure',
  'jarvis-theme/modello',
  'jarvis-theme/playgames',
  'jarvis-theme/olsonkart',
  'jarvis-theme/shopymart',
  'jarvis-theme/safion',
  'jarvis-theme/toylogy',
  'jarvis-theme/tender',
  'jarvis-theme/cupcake',
  'jarvis-theme/glammy',


]

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  /*'liquid': 'Liquid',
  'Timber': 'Liquid',
  'skeleton-theme': 'Liquid',
  'dashing': 'Ruby',
  'shopify_theme': 'Ruby',
  'Shopify-Developer-Book': 'Ruby',
  'offsite-gateway-sim': 'Ruby',
  'shopify.github.com': 'JavaScript',
  'batman': 'JavaScript'
  */
  'playbook':'template',
  'babyclothes':'template',
  'distroshop':'template',
  'electrasol':'template',
  'polywhite':'template',
  'dcraft':'template',
  'shion':'template',
  'handicraft':'template',
  'leisure':'template',
  'modello':'template',
  'playgames':'template',
  'olsonkart':'template',
  'shopymart':'template',
  'safion':'template',
  'toylogy':'template',
  'tender':'template',
  'cupcake':'template',
  'glammy':'template',
}

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {
  'Timber': '/images/repo-avatars/timber.gif',
  'dashing': '/images/repo-avatars/dashing.gif',
  'superdb': '/images/repo-avatars/super-debugger.gif',
  'batman': '/images/repo-avatars/batmanjs.gif'
}
