import StatusError from "../../errors/statusError";

export function validateDates(from?: string, to?: string) {
  if (!from || !to) {
    throw new StatusError(400, "missing or invalid parameters");
  }

  if (new Date(from) > new Date(to)) {
    throw new StatusError(400, "TO date cannot be earlier then FROM date");
  }
}
