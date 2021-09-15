import Redis from 'ioredis'

export const createRedisConnection =
  ({ config, createLogger }) =>
    () => {
      const log = createLogger('redisConnection')
      const {
        database: {
          redis: { uri }
        }
      } = config

      const redis = new Redis(uri)
      log('Connection to redis has been made at ', uri)
      return redis
    }
