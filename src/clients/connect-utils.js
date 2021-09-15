import * as grpc from "@grpc/grpc-js";
export const createMakeConnectionToUtils =
  ({ config, loadProto }) =>
  () => {
    const {
      utilsProtoPath: { path, link },
    } = config;
    const utilsProto = loadProto(path).utils;

    const client = new utilsProto.UtilsService(
      link,
      grpc.credentials.createInsecure()
    );

    return client;
  };
