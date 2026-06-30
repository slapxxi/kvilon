import price1Image from '~/assets/price-1.png'
import price2Image from '~/assets/price-2.png'
import price3Image from '~/assets/price-3.png'

const config = {
  title: (
    <span>
      Transparent pricing. <br /> <em>No hidden fees</em>
    </span>
  ),
  list: [
    {
      img: price1Image,
      plan: 'Starter',
      price: (
        <span className="text-6xl font-title">
          $12<span className="text-2xl">/month</span>
        </span>
      ),
      description: 'Perfect for small teams',
      button: 'Start hiring',
      features: ['3 projects', 'AI applicant screening', 'AI recruiter'],
    },
    {
      img: price2Image,
      plan: 'Professional',
      price: (
        <span className="text-6xl font-title">
          $99<span className="text-2xl">/month</span>
        </span>
      ),
      description: 'Perfect for growing teams',
      button: 'Start hiring',
      features: [
        'Unlimited projects',
        'AI applicant screening',
        'AI recruiter',
        'Risk-free guarantee',
      ],
    },
    {
      img: price3Image,
      plan: 'Enterprise',
      price: <span className="text-6xl font-title">Custom</span>,
      description: 'For large organizations',
      button: 'Contact us',
      features: [
        'Unlimited projects',
        'AI applicant screening',
        'Custom skill assessments',
        'Custom AI recruiter',
      ],
    },
  ],
}

export default config
