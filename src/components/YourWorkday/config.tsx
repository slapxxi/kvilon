import CubeIcon from '~/assets/cube-1.svg?react'
import CubeIcon2 from '~/assets/cube-2.svg?react'
import CubeIcon3 from '~/assets/cube-3.svg?react'
import CubeIcon4 from '~/assets/cube-4.svg?react'

type Config = {
  points: {
    title?: string
    text?: string
    img?: string
    Icon?: React.FC<any>
  }[]
}

const config: Config = {
  points: [
    {
      title: `One wrong cell –  and the policy is wrong`,
      text: `Manual data entry, broken formulas, uncontrolled file versions. Every mistake costs money and reputation`,
      Icon: CubeIcon,
    },
    {},
    {
      title: `150 emails a day.  Zero shared context`,
      text: `Policy terms in one thread, documents  in another, approval history gone. Finding the right email takes longer than the work itself`,
      Icon: CubeIcon2,
    },
    {},
    {
      title: `Client data here.  Documents there`,
      text: `No way to track what's been done`,
      Icon: CubeIcon3,
    },
    {
      title: `Configuring any  system for insurance  is a project in itself`,
      text: `One that takes months`,
      Icon: CubeIcon4,
    },
  ],
}

export default config
