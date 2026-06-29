import screenshotImage from '~/assets/screenshot.png'
import config from './config'
import { padNumber } from '~/lib'

export const AdvantagesSection = () => {
  return (
    <div className="col-span-full grid grid-cols-subgrid border-t border-b border-stone-300">
      <div className="col-[2/-1] grid grid-cols-[minmax(auto,580px)_minmax(0,40px)_1fr] grid-rows-[40px_1fr] gap-8">
        <div className="row-2 grid grid-rows-[auto_50px_1fr] self-start">
          <h2 className="font-title text-5xl [&_em]:text-bronze [&_em]:not-italic">
            {config.title}
          </h2>
          <img src={screenshotImage} alt="" className="row-3" />
        </div>

        <ol className="col-3 row-span-full grid auto-rows-fr border-l border-stone-300">
          {config.list.map((item, i) => (
            <li
              key={i}
              className="group border-b border-stone-300 px-5 
              py-10 pr-10 transition-colors last:border-0 hover:bg-white"
            >
              <div className="grid grid-cols-[minmax(auto,100px)_1fr] gap-4 transition-transform group-hover:translate-x-4">
                <div>
                  {padNumber(i + 1)}-
                  <span className="text-stone-400">
                    {padNumber(config.list.length)}
                  </span>
                </div>
                <h3 className="title text-3xl">{item.title}</h3>
                <p className="col-2 text-lg">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
