import config from './config'
import CheckmarkIcon from '~/assets/checkmark.svg?react'

export const PricingSection = () => {
  return (
    <section className="col-2 grid gap-15 my-10">
      <h2 className="title text-5xl">{config.title}</h2>

      <ul className="grid auto-rows-fr grid-cols-3 gap-5">
        {config.list.map((item) => (
          <li className="grid rounded-[40px] bg-white p-5 content-start">
            <div className="grid grid-cols-[40px_1fr_40px] gap-y-7">
              <div className="col-span-full grid grid-cols-subgrid content-between">
                <img
                  src={item.img}
                  className="col-span-full row-1 h-full"
                  alt=""
                />

                <div className="col-2 row-1 grid content-between gap-y-8 py-10 text-white">
                  <div className="justify-self-start rounded-full bg-white p-2 px-4 text-black">
                    {item.plan}
                  </div>
                  <span>{item.price}</span>
                </div>
              </div>

              <div className="col-2 text-2xl font-bold">{item.description}</div>

              <button className="btn col-2 bg-black text-lg text-white">
                <span>{item.button}</span>
              </button>

              <ul className="col-2">
                {item.features.map((feature) => (
                  <li className="flex items-center gap-4 text-lg">
                    <CheckmarkIcon className="size-2.5 text-stone-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
