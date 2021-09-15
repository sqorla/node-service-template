import createDepContainer from "./dependency";
import * as grpc from "@grpc/grpc-js";

// Introduce dependency injection
const container = createDepContainer();
const config = container.resolve("config");
const createLogger = container.resolve("createLogger");
// const loadProto = container.resolve("loadProto");
const createSentryTracker = container.resolve("createSentryTracker");
// const accountBroker = container.resolve("accountBroker");
const createMongoConnection = container.resolve("createMongoConnection");
const createRedisConnection = container.resolve("createRedisConnection");

export const startServer = async (config) => {
  const log = createLogger("main");
  const { port, accountProtoPath } = config;

  // starting sentry tracking
  createSentryTracker();

  // Starting DB
  await createMongoConnection();

  // Starting Redis
  createRedisConnection();

  // get protobufs
  // const accountProto = loadProto(accountProtoPath).account;

  // Start grpc server
  log(`Starting gRPC server on port ${port}...`);
  const server = new grpc.Server();
  // server.addService(accountProto.AccountService.service, {
  //   login: async (call, callback) => {
  //     try {
  //       const data = await accountBroker.login(call.request);
  //       callback(null, data);
  //     } catch (error) {
  //       callback(error);
  //     }
  //   },

  // });
  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      log(`Started gRPC server on port ${port}...`);
    }
  );
};

startServer(config).catch(console.error);
