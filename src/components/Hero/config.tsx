type Config = {
  text: {
    [key: string]: any
  }
}
const config: Config = {
  text: {
    hero: (
      <span>
        Flexible <em>Management</em> System <em>for</em> Insurance{' '}
        <em>Professionals</em>
      </span>
    ),
    motto: (
      <>
        Stop managing chaos.
        <br />
        Start managing growth.
      </>
    ),
  },
}

export default config
