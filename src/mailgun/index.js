export const createEmailMessage =
  ({ notificationClient }) =>
  async ({ to, subject, text }) =>
    new Promise((resolve, reject) =>
      notificationClient().sendEmail({ to, subject, text }, (err) => {
        if (err) reject(err);
        resolve();
      })
    );
