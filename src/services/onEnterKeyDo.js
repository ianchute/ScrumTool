export default function(handler) {
  return function(e) {
    if (e.charCode === 13)
      return handler(e)
  }
}
