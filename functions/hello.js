// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'Hello' },
  { id: 2, name: 'Boy' },
]
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'hello world',
  }
}
