import dotenv from "dotenv";
import { defaultTo } from "@meltwater/phi";
import { name as applicationName } from "../package.json";
import path from "path";

dotenv.config({});

export default {
  env: defaultTo("development", process.env.NODE_ENV),
  applicationName,
  port: process.env.PORT,
  database: {
    mongodb: {
      uri: defaultTo(
        "mongodb+srv://domey:Akankobateng1@cluster0.ymxrx.mongodb.net/sqorla-system",
        process.env.MONGODB_DATABASE_URI
      ),
      useUnifiedTopology: defaultTo(
        true,
        process.env.MONGODB_USE_UNIFIED_TOPOLOGY
      ),
      useNewUrlParser: defaultTo(true, process.env.MONGODB_USE_NEW_URL_PARSER),
    },
    redis: {
      uri: process.env.REDISTOGO_URL,
    },
  },
  utilsProtoPath: {
    path: path.join(__dirname, "../proto/utils/utils.proto"),
    link: defaultTo("localhost:4002", process.env.UTILS_SERVICE_LINK),
  },
  notificationProtoPath: {
    path: path.join(__dirname, "../proto/notification/notification.proto"),
    link: defaultTo("localhost:4001", process.env.NOTIFICATION_SERVICE_LINK),
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: defaultTo("template-service", process.env.SENTRY_ENVIRONMENT),
  },
};
