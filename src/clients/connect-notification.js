import * as grpc from "@grpc/grpc-js";
export const createMakeConnectionToNotification =
  ({ config, loadProto }) =>
  () => {
    const {
      notificationProtoPath: { path, link },
    } = config;
    const notificationProto = loadProto(path).notification;

    const client = new notificationProto.NotificationService(
      link,
      grpc.credentials.createInsecure()
    );

    return client;
  };
