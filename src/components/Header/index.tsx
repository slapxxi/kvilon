import Logo from '~/assets/kvilon-logo.svg?react'
import config from './config'
import { useScrollThreshold } from '~/hooks'

export const Header = () => {
  const isScrolling = useScrollThreshold()

  return (
    <header
      className={`${isScrolling ? 'bg-dark-stone/85' : 'bg-dark-stone'} sticky top-2 z-20 col-2 
          my-2 flex items-center justify-between rounded-full bg-dark-stone p-4 px-6 text-white backdrop-blur-md transition-colors duration-700`}
    >
      <Logo className="w-40" />

      <nav className="font-extra">
        <ul className="flex gap-12">
          {config.nav.map((item) => (
            <li
              key={item}
              className="border-b border-transparent hover:border-b-lime-200"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4">
        <button className="btn btn-outline">
          <span className="col-2 row-2">Eng</span>
        </button>
        <button className="btn">
          <span className="col-2 row-2">{config.text.trial}</span>
        </button>
      </div>
    </header>
  )
}
