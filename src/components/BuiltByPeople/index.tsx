import config from './config'

export const BuiltByPeopleSection = () => {
  return (
    <div className="col-2 grid auto-rows-fr gap-5 lg:grid-cols-3">
      <div className="grid content-start gap-10">
        <h2 className="title text-6xl">{config.title}</h2>
        <p className="title text-3xl font-medium">{config.description}</p>
      </div>

      {config.texts.map((text, i) => (
        <div key={i} className="grid content-start gap-7.5">
          <h3 className="title text-3xl">{text.title}</h3>
          <p className="text-lg">{text.text}</p>
        </div>
      ))}

      <ul className="col-span-full grid grid-cols-subgrid">
        {config.list.map((item, i) => (
          <li
            key={i}
            className="grid content-start gap-7.5 rounded-[30px] bg-white p-8"
          >
            <span className="mb-7.5 inline-grid size-12 place-items-center justify-self-start rounded-xl bg-darklime-50">
              <item.Icon className="h-5" />
            </span>
            <h3 className="title text-3xl">{item.title}</h3>
            <p className="text-lg">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
