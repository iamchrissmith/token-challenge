export default function makeActionCreator(type, ...argNames) {
  if (argNames.includes('type')) {
    throw new Error(
      'type is a special redux keyword, please use different word in your action creator'
    )
  }
  return {
    name: type,
    action: function(...args) {
      let action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
  }
}
