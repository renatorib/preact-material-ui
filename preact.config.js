export default function(config, env, helpers) {
  config.resolve.alias['@mui'] = 'material-ui'

  // preact compatibility
  config.resolve.alias['react-tap-event-plugin'] = 'preact-tap-event-plugin'
  config.resolve.alias['react-addons-shallow-compare'] =
    'preact-shallow-compare'
}
