import mongoose from "mongoose";

export const compileModel = ({ name, schema }) => {
  const compiledSchema = mongoose.Schema(schema, { timestamps: true });
  return mongoose.model(name, compiledSchema);
};

export const createMongoConnection =
  ({ config, createLogger }) =>
  async () => {
    const log = createLogger("databaseConnection");
    const {
      database: {
        mongodb: { uri, ...options },
      },
    } = config;
    await mongoose.connect(uri, options);
    log("Connection to mongodb has been made at", uri);
  };

export const createModels = () => {
  return {
    // Model:compileModel({ name: "model", schema: model }),
  };
};
