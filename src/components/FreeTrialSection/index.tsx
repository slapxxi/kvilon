import cardImage from '~/assets/card.png'
import CheckmarkIcon from '~/assets/checkmark.svg?react'
import FreeTrial from '~/assets/free-trial.svg?react'
import config from './config'

export const FreeTrialSection = () => {
  return (
    <div className="col-2 my-8 grid grid-cols-[1.2fr_minmax(10px,60px)_1fr]">
      <div className="grid grid-cols-[1fr_100px] grid-rows-[28px_1fr]">
        <div className="col-1 row-2 z-10 ml-8 font-semibold leading-[120%]">
          <h3 className="font-title text-6xl">Try Kvilon</h3>
          <h4 className="font-title text-6xl text-bronze">Free for 14 days</h4>
        </div>
        <img src={cardImage} alt="" className="col-1 row-span-full w-full" />
        <FreeTrial className="row-2 size-50 justify-self-end" />
      </div>

      <div className="grid gap-4 place-self-center col-3 max-w-3xl">
        <div className="text-2xl">
          Your demo account is ready — pre-filled with real marine insurance
          data. No setup, no IT department, no commitment
        </div>
        <ul className="grid min-h-[40vh] content-center gap-12">
          {config.demoFeatures.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-title text-4xl"
            >
              <CheckmarkIcon className="size-4" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="btn justify-self-start">
          <span>Start Free Trial</span>
        </button>
      </div>
    </div>
  )
}
