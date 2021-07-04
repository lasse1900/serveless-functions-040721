// domain/.netlify/functions/1-hello
// exports - Netlify is looking for handler
// const person = { name: 'John' }

exports.handler = async (event, context, cb) => {
  // console.log(context)
  return {
    statusCode: 200,
    body: 'Our first netlify functions example',
    // body: person
    // body: JSON.stringify(person)
  }
}

// Or with callback

// exports.handler = async (event, context, cb) => {
//   cb(null,
//     { statusCode: 200, body: 'Hello World!' }
//   )
// }