import StatusError from "../../errors/statusError";
import { getDatesInRange } from "../_helpers/getDatesInRange";
import { trimDate } from "../_helpers/trimDate";
import { validateDates } from "../_helpers/validateDates";

describe("getDatesInRange function", () => {
  test("should get all dates from range", () => {
    const got = getDatesInRange(new Date("2019-12-15"), new Date("2019-12-20"));

    const want = [
      new Date("2019-12-15"),
      new Date("2019-12-16"),
      new Date("2019-12-17"),
      new Date("2019-12-18"),
      new Date("2019-12-19"),
      new Date("2019-12-20"),
    ];

    expect(got).toEqual(want);
  });

  test("should throw error if FROM date is greater then TO date", () => {
    expect(() => {
      getDatesInRange(new Date("2019-12-20"), new Date("2019-12-15"));
    }).toThrow("TO date cannot be earlier then FROM date");
  });
});

describe("trimDate function", () => {
  test("should properly trim date", () => {
    const got = trimDate(new Date("2019-12-20"));
    const want = "2019-12-20";

    expect(got).toEqual(want);
  });
});

describe("validateDates function", () => {
  test("should properly validate dates", () => {
    expect(() => {
      validateDates("2019-12-15", "2019-12-20");
    }).not.toThrow();
  });

  test(`should throw status error with message - "missing or invalid parameters"  if parameters are missing`, () => {
    expect(() => {
      validateDates(undefined, undefined);
    }).toThrow(new StatusError(400, "missing or invalid parameters"));
  });

  test("should throw status error with message - TO date cannot be earlier then FROM date", () => {
    expect(() => {
      validateDates("2019-12-15", "2019-12-14");
    }).toThrow(
      new StatusError(400, "TO date cannot be earlier then FROM date")
    );
  });
});
