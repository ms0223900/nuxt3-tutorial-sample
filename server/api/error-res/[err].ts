import { NuxtError } from "#app";

export default defineEventHandler((e) => {
  const err = e.context.params.err;
  const errOptions: Partial<NuxtError> = {
    fatal: true,
    statusCode: 404,
    statusMessage: `"${err}" data not FOUND :(`,
  };
  throw createError(errOptions);

  // showErro「不行」在server端執行（非指server side）
  // throw showError(errOptions);
});
