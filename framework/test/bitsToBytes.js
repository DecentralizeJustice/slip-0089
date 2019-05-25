const utilities = require('../utilities')

const numberOfTest = 32
const entropyBytesNeeded = 0
const pythonName = 'bits_to_bytes.py'
async function compareFunction (pythonOutput, javascriptOutput) {
  return pythonOutput[0] === javascriptOutput
}
module.exports.runTest = async function () {
  const func = await utilities.runTest(entropyBytesNeeded, numberOfTest, pythonName,
    utilities.slip39.bitsToBytes, compareFunction)
  return func
}