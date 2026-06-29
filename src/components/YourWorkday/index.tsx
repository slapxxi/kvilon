import config from './config'
import LogoMin from '~/assets/logo-min.svg?react'

export const YourWorkdaySection = () => {
  return (
    <div className="col-2 grid auto-rows-fr gap-5 grid-cols-2 lg:grid-cols-3">
      <h2 className="font-title text-5xl font-semibold mt-10">
        Does this look  your workday?
      </h2>

      {config.points.map((item) => (
        <div className="grid grid-cols-[auto_auto] gap-10 rounded-2xl bg-white p-10">
          {item.title && (
            <h3 className="font-title text-3xl font-semibold">{item.title}</h3>
          )}
          {item.Icon && (
            <item.Icon className="justify-self-end text-stone-300" />
          )}
          {item.text && (
            <p className="col-span-2 text-xl text-dark-stone">{item.text}</p>
          )}
        </div>
      ))}

      <div className="col-span-2 grid grid-cols-subgrid content-between rounded-2xl bg-stone-700 p-10 text-white ">
        <h3 className="font-title text-4xl font-semibold">
          Kvilon was built to put  an end to all of this
        </h3>
        <LogoMin className="row-2 size-15" />
      </div>
    </div>
  )
}
