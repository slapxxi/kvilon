import heroBackdrop from '~/assets/hero-backdrop.png'
import heroImage from '~/assets/hero.png'
import PlayIcon from '~/assets/play.svg?react'
import config from './config'

export const HeroSection = () => {
  return (
    <section
      className="col-2 grid grid-cols-[minmax(auto,min(100%,900px))_auto] 
      grid-rows-[minmax(100px,1fr)_auto_1fr_auto_1fr] items-center justify-between gap-4"
    >
      <h1 className="row-2 animate-enter [animation-delay:200ms] font-title text-8xl [&_em]:text-bronze [&_em]:not-italic">
        {config.text.hero}
      </h1>

      <div className="row-2 grid animate-enter grid-cols-[minmax(40px,150px)_auto] items-center gap-4 [animation-delay:500ms]">
        <img src={heroImage} alt="" className="w-full" />
        <div className="font-title text-4xl">{config.text.motto}</div>
        <div className="col-span-full grid grid-cols-2 gap-4">
          <button className="btn btn-inverted">
            <span>Try for free</span>
          </button>
          <button className="btn btn-outline">
            <span>Try for free</span>
          </button>
        </div>
      </div>

      <div className="col-span-full row-4 grid">
        <img src={heroBackdrop} alt="" className="col-1 row-1 w-full" />
        <div className="col-1 row-1 flex items-center gap-4 place-self-center">
          <div className="inline-grid size-20 cursor-pointer place-items-center rounded-full bg-darklime hover:bg-darklime/80">
            <PlayIcon className="translate-x-0.5" />
          </div>
          <button className="btn">
            <span>See how kvilon works</span>
          </button>
        </div>
      </div>
    </section>
  )
}
