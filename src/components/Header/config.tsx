type Config = {
  text: {
    trial: string
    trialExtra: string
    terms: string
    request: string
    touch: string
    match: string
  }
  nav: string[]
}

const config: Config = {
  text: {
    trial: 'Free Trial',
    trialExtra: '14-day free trial —  included with any plan',
    terms: `By clicking the button, you agree to our Privacy Policy and consent to the processing of your personal data`,
    request: 'Send request',
    touch: `Get in touch`,
    match: `We'll match a plan to your team and volume`,
  },
  nav: ['Features', 'How-it-works', 'Pricing', 'About', 'Contacts'],
}

export default config
