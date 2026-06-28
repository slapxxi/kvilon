import ChevronRight from '~/assets/chevron-right.svg?react'
import Logo from '~/assets/kvilon-logo.svg?react'
import config from '~/config'
import './App.css'

const App = () => {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_minmax(auto,1780px)_1fr] grid-rows-[auto_1fr] gap-x-4 bg-neutral-100">
      <header className="col-2 flex items-center justify-between rounded-full bg-dark-stone p-4 px-6 text-white">
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

      <section className="col-2 grid grid-cols-[minmax(0,1.4fr)_minmax(0,3.3fr)_minmax(0,1fr)] gap-2 gap-x-4 self-start rounded-[40px] bg-white p-10">
        <div className="row-span-2 grid gap-7 font-title">
          <h3 className="text-2xl text-bronze">{config.text.touch}</h3>
          <p className="text-5xl font-semibold">{config.text.match}</p>
        </div>

        <form className="grid grid-cols-2 gap-x-7 self-start">
          <input type="text" placeholder="Name" className="text-input" />
          <input type="email" placeholder="Email" className="text-input" />
          <input
            type="phone"
            placeholder="Phone"
            className="text-input"
            required
          />
          <input type="text" placeholder="Company" className="text-input" />
        </form>

        <button className="btn place-self-center">
          <span>{config.text.request}</span>
        </button>

        <div className="col-2 row-3 self-end ml-8 text-sm">
          <label className="inline-flex items-center gap-2 text-stone-400">
            <input type="radio" />
            <span>{config.text.terms}</span>
          </label>
        </div>

        <div className="col-3 row-3 text-right font-text text-2xl">
          {config.text.trialExtra}
        </div>
      </section>

      <footer className="col-span-full grid grid-cols-subgrid rounded-t-[80px] bg-dark-stone text-white">
        <div className="col-2 grid grid-cols-2 grid-rows-[80px_auto_minmax(120px,auto)_80px]">
          <div className="row-2 mr-12 grid grid-cols-[auto_minmax(10px,80px)_auto] gap-y-12">
            <Logo className="w-108 max-w-full self-center" />
            <div className="col-3 grid gap-2">
              <h3 className="text-2xl font-bold">Contacts</h3>
              <a
                href="mailto:hello@kvilon.com"
                className="font-title text-5xl font-light"
              >
                hello@kvilon.com
              </a>
            </div>

            <p className="col-1 text-2xl">
              Policy management system for insurance professionals
            </p>

            <div className="col-3 flex gap-2 self-start">
              <button className="btn btn-secondary">
                <span className="inline-flex gap-2 items-center">
                  <span>LinkedIn</span>
                  <ChevronRight className="text-darklime-200 size-4"></ChevronRight>
                </span>
              </button>
              <button className="btn btn-secondary">
                <span className="inline-flex gap-2 items-center">
                  <span>Telegram</span>
                  <ChevronRight className="text-darklime-200 size-4"></ChevronRight>
                </span>
              </button>
            </div>
          </div>

          <div className="col-1 mr-12 row-3 flex text-sm self-end justify-between text-bronze-600">
            <div>&copy; 2025 kvilon. All rights reserved.</div>
            <div>Privacy PolicyTerms of Use</div>
            <div>Designed &amp; developed by me</div>
          </div>

          <div className="col-2 row-[1/-1] grid grid-cols-3 grid-rows-subgrid">
            {config.footerSections.map((section) => (
              <section className="row-span-full grid grid-rows-subgrid justify-items-center border-l border-bronze-700 last:border-r">
                <div className="row-2 grid content-start gap-7">
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                  <ul className="grid gap-5">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-lg text-bronze-400">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
