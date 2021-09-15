import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";

export const createLoadProto = () => (protoPath) => {
  const packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  return grpc.loadPackageDefinition(packageDefinition);
};
