import MessageIcon from '~/assets/message.svg?react'
import GridIcon from '~/assets/grid.svg?react'
import EyeIcon from '~/assets/eye.svg?react'

type Config = {
  demoFeatures: string[]
  text: {}
}

const config: Config = {
  demoFeatures: [
    'Ready in minutes, not weeks',
    'Real data, real workflows',
    'No credit card required',
  ],
  text: {
    trial: 'Free Trial',
    trialExtra: '14-day free trial —  included with any plan',
    terms: `By clicking the button, you agree to our Privacy Policy and consent to the processing of your personal data`,
    request: 'Send request',
    touch: `Get in touch`,
    match: `We'll match a plan to your team and volume`,
  },
}

export default config
