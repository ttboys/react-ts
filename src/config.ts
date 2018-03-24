interface Services {
  user: string
}

interface Config {
  services: Services
}

export const config: Config = {
  services: {
    user: process.env.CONFIG_SERVICE_USER
  }
}
