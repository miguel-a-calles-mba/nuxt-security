const generatedBy =
  '# Generated by https://github.com/dansmaculotte/nuxt-security'

const contactOutput = contact => `Contact: ${contact}`
const encryptionOuput = url => `Encryption: ${url}`
const acknowledgmentOuput = url => `Acknowledgments: ${url}`
const languagesOutput = languages => `Preferred-Languages: ${languages}`
const canonicalOutput = url => `Canonical: ${url}`
const policyOuput = url => `Policy: ${url}`
const hiringOuput = url => `Hiring: ${url}`

const makeArray = arr => (Array.isArray(arr) ? arr : [arr])

module.exports = ({
  contacts,
  encryptions,
  acknowledgments,
  preferredLanguages,
  canonical,
  policies,
  hirings
}) => {
  const contents = [generatedBy]

  makeArray(contacts).map(contact => contents.push(contactOutput(contact)))

  makeArray(encryptions).map(encryption =>
    contents.push(encryptionOuput(encryption))
  )

  makeArray(acknowledgments).map(acknowledgment =>
    contents.push(acknowledgmentOuput(acknowledgment))
  )

  if (preferredLanguages && preferredLanguages.length) {
    contents.push(languagesOutput(makeArray(preferredLanguages).join(',')))
  }

  if (canonical) {
    contents.push(canonicalOutput(canonical))
  }

  makeArray(policies).map(policy => contents.push(policyOuput(policy)))

  makeArray(hirings).map(hiring => contents.push(hiringOuput(hiring)))

  return contents.join('\n')
}