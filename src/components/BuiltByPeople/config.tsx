import User from '~/assets/user.svg?react'
import Target from '~/assets/target.svg?react'
import Graph from '~/assets/graph.svg?react'

const config = {
  title: 'Kvilon was built  by people',
  description: (
    <span>
      who know <em>insurance</em> from the inside
    </span>
  ),
  texts: [
    {
      title: 'Who we are',
      text: `Behind kvilon is a team of specialists with years  of hands-on experience in insurance and brokerage.  We understand how underwriting works, how claims  are handled, and what actually gets in the way of working  efficiently — because we've been through it ourselves`,
    },
    {
      title: 'Why we built it',
      text: `That's why kvilon isn't a generic system adapted  for insurance. It's a platform designed from the ground up  for the real challenges of the insurance market: policies, underwriting, claims, and client management. Every feature  is a direct answer to a problem we faced ourselves`,
    },
  ],
  list: [
    {
      Icon: User,
      title: 'Industry Expertise',
      text: `A team with real experience in insurance  and brokerage — not an IT company trying to figure out how insurance works`,
    },
    {
      Icon: Target,
      title: 'Results First',
      text: `A product built for fast implementation  and immediate value — not for feature count`,
    },
    {
      Icon: Graph,
      title: 'Long-Term Thinking',
      text: `We're starting with marine insurance — and building a platform for the entire insurance market`,
    },
  ],
}

export default config
