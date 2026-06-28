import Logo from '~/assets/kvilon-logo.svg?react'
import './App.css'

const config = {
  text: {
    trial: 'Free Trial',
    terms: `By clicking the button, you agree to our Privacy Policy and consent to the processing of your personal data`,
    request: 'Send request',
    touch: `Get in touch`,
    match: `We'll match a plan to your team and volume`,
  },
  nav: ['Features', 'How-it-works', 'Pricing', 'About', 'Contacts'],
  footerSections: [
    { title: 'Home', links: [] },
    {
      title: 'Product',
      links: ['Features', 'How-it-works', 'Pricing', 'Free Trial'],
    },
    { title: 'Company', links: ['About Us'] },
  ],
}

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
          <button className="btn btn-secondary">
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

        <div className="col-2 row-3 self-end justify-self-center text-sm">
          <label className="inline-flex items-center gap-2 text-stone-400">
            <input type="radio" />
            <span>{config.text.terms}</span>
          </label>
        </div>

        <div className="col-3 row-3 text-right font-text text-2xl">
          14-day free trial —  included with any plan
        </div>
      </section>

      <footer className="col-span-full grid grid-cols-subgrid rounded-t-[80px] bg-dark-stone text-white">
        <div className="col-2 grid grid-cols-2 grid-rows-[minmax(40px,80px)_auto_80px]">
          <div className="row-2">
            <Logo className="w-108" />
            <p className="text-2xl">
              Policy management system for insurance professionals
            </p>
          </div>
          <div className="col-2 row-span-3 grid grid-cols-3 grid-rows-subgrid">
            {config.footerSections.map((section) => (
              <section className="row-span-3 grid grid-rows-subgrid justify-items-center border-l last:border-r border-bronze-700">
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
