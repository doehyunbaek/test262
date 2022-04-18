// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.tozoneddatetime
description: A number is converted to a string, then to Temporal.PlainDate
features: [Temporal]
---*/

const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);

const arg = 19761118;

const result = instance.toZonedDateTime({ plainDate: arg, timeZone: "UTC" });
assert.sameValue(result.epochNanoseconds, 217_168_496_987_654_321n, "19761118 is a valid ISO string for PlainDate");

const numbers = [
  1,
  -19761118,
  1234567890,
];

for (const arg of numbers) {
  assert.throws(
    RangeError,
    () => instance.toZonedDateTime({ plainDate: arg, timeZone: "UTC" }),
    `Number ${arg} does not convert to a valid ISO string for PlainDate`
  );
}
