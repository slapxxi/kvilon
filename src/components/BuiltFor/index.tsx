import config from './config'

export const BuiltForSection = () => {
  return (
    <div className="col-span-full grid grid-cols-subgrid grid-rows-[auto_minmax(80px,1fr)_auto_1fr] [--border:var(--color-stone-300)]">
      <div className="col-2 grid grid-cols-2">
        <h2 className="title max-w-150 text-6xl">{config.title}</h2>
        <p className="max-w-120 self-end text-2xl">{config.description}</p>
      </div>

      <div className="col-span-full row-3 border-t border-b border-(--border)"></div>
      <ul className="col-2 row-3 grid grid-cols-4">
        {config.list.map((item) => (
          <li className="grid content-between gap-4 border-t-2 border-t-transparent py-10 hover:border-t-black border-l border-(--border) px-8 first:border-l-0">
            <div className="text-stone-400 lowercase">{item.title}</div>
            <div className="title text-7xl">{item.text}</div>
            <div className="text-stone-400 lowercase">{item.subtitle}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
