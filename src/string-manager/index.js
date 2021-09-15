export const createGenerateVerificationCode =
  ({ utilsClient }) =>
  async () =>
    new Promise((resolve, reject) =>
      utilsClient().generateVerificationCode({}, (_, response) =>
        resolve(response.result)
      )
    );

export const createGenerateRandomString =
  ({ utilsClient }) =>
  async (length) =>
    new Promise((resolve, reject) =>
      utilsClient().generateRandomString({ length }, (_, res) =>
        resolve(res.result)
      )
    );

export const createTransformPhoneNumber =
  ({ utilsClient }) =>
  async (phone) =>
    new Promise((resolve, reject) =>
      utilsClient().transformPhoneNumber({ phone }, (_, response) =>
        resolve(response.result)
      )
    );
