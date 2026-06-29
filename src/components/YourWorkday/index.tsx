import clsx from 'clsx'
import config from './config'
import LogoMin from '~/assets/logo-min.svg?react'

export const YourWorkdaySection = () => {
  return (
    <div className="col-2 grid auto-rows-fr grid-cols-2 gap-5 lg:grid-cols-3">
      <h2 className="mt-10 font-title text-5xl font-semibold">
        Does this look  your workday?
      </h2>

      {config.points.map((item) => (
        <div
          className={clsx(
            'relative grid gap-y-10 gap-x-6 grid-cols-[1fr_auto] overflow-hidden rounded-2xl bg-white p-10 content-start',
            item.img && 'tile',
          )}
        >
          {item.title && (
            <h3 className="font-title text-3xl font-semibold">{item.title}</h3>
          )}
          {item.Icon && <item.Icon className="text-stone-300" />}
          {item.text && (
            <p className="col-span-full text-xl text-dark-stone">{item.text}</p>
          )}
        </div>
      ))}

      <div className="tile grid grid-cols-subgrid content-between rounded-2xl p-10 text-white lg:col-span-2">
        <h3 className="font-title text-4xl font-semibold">
          Kvilon was built to put  an end to all of this
        </h3>
        <LogoMin className="row-2 size-15" />
      </div>
    </div>
  )
}
