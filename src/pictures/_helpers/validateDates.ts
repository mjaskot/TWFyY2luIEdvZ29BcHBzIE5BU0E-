import StatusError from "../../errors/statusError";

export function validateDates(from?: string, to?: string) {
  if (!from || !to) {
    throw new StatusError(400, "MISSING OR INVALID QUERY PARAMETERS");
  }

  if (new Date(from) > new Date(to)) {
    throw new StatusError(400, "TO DATE CANNOT BE LESSER THEN FROM DATE");
  }
}
