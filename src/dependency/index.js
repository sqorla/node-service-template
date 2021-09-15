import { asValue, asFunction, createContainer } from "awilix";

// Env vars
import config from "../../config";

// Adapters
import { createLoadProto } from "../loadProto";
import { createLogger } from "../logger";
import { createSentryTracker } from "../sentry";
import { createEmailMessage } from "../mailgun";

// Call Clients
import { createMakeConnectionToNotification } from "../clients/connect-notification";
import { createMakeConnectionToUtils } from "../clients/connect-utils";

import {
  createGenerateRandomString,
  createGenerateVerificationCode,
  createTransformPhoneNumber,
} from "../string-manager";

import {
  createComparePassword,
  createHashPassword,
  createVerifyPayload,
  createSignPayload,
} from "../authentication";

import { createErrors } from "../utils/errors";

// Storage
import { createMongoConnection, createModels } from "../storage/mongodb";
import { createRedisConnection } from "../storage/redis";

// import createBroker from "../broker";

const container = createContainer();
container.register("config", asValue(config));
container.register(
  "createSentryTracker",
  asFunction(createSentryTracker).scoped()
);
container.register("createLogger", asFunction(createLogger).scoped());
container.register("loadProto", asFunction(createLoadProto).scoped());
container.register(
  "notificationClient",
  asFunction(createMakeConnectionToNotification).scoped()
);
container.register(
  "utilsClient",
  asFunction(createMakeConnectionToUtils).scoped()
);

container.register(
  "createGenerateRandomString",
  asFunction(createGenerateRandomString).scoped()
);
container.register(
  "createGenerateVerificationCode",
  asFunction(createGenerateVerificationCode).scoped()
);
container.register(
  "createTransformPhoneNumber",
  asFunction(createTransformPhoneNumber).scoped()
);
container.register(
  "comparePassword",
  asFunction(createComparePassword).scoped()
);
container.register("hashPassword", asFunction(createHashPassword).scoped());
container.register("verifyPayload", asFunction(createVerifyPayload).scoped());
container.register("signPayload", asFunction(createSignPayload).scoped());
container.register("errors", asFunction(createErrors).scoped());
container.register(
  "createMongoConnection",
  asFunction(createMongoConnection).scoped()
);
container.register(
  "createRedisConnection",
  asFunction(createRedisConnection).scoped()
);
container.register(
  "createRedisConnection",
  asFunction(createRedisConnection).scoped()
);
container.register(
  "createEmailMessage",
  asFunction(createEmailMessage).scoped()
);
container.register("models", asFunction(createModels).scoped());
// container.register("accountBroker", asFunction(createBroker).scoped());

export default () => container;
