export const createHashPassword =
  ({ utilsClient }) =>
  async (password) =>
    new Promise((resolve, reject) =>
      utilsClient().hashPassword({ password }, (_, response) =>
        resolve(response.result)
      )
    );

export const createComparePassword =
  ({ utilsClient }) =>
  async ({ password, hashedPassword }) =>
    new Promise((resolve, reject) =>
      utilsClient().comparePassword({ password, hashedPassword }, (_, res) =>
        resolve(res.result)
      )
    );

export const createSignPayload =
  ({ utilsClient }) =>
  async (payload) =>
    new Promise((resolve, reject) =>
      utilsClient().signAdminPayload(payload, (_, res) => resolve(res.result))
    );

export const createVerifyPayload =
  ({ utilsClient }) =>
  async (token) =>
    new Promise((resolve, reject) =>
      utilsClient().verifyPayload({ token }, (_, res) => resolve(res.result))
    );
