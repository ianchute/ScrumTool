export default function(handler) {
  return function(e) {
    if (e.charCode === 27)
      return handler(e)
  }
}
