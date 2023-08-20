import { findMaxSubArray, findSumEvenNum, sort } from "./TEST-1";

describe("TEST 1", () => {
  it("Searching Algorithm", () => {
    expect(sort([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    expect(
      sort([
        65, 92, 13, 41, 29, 88, 52, 77, 46, 59, 70, 18, 3, 87, 34, 24, 6, 95, 9, 73, 58, 39, 54, 82, 16, 21, 68, 47, 11,
        76, 83, 55, 27, 98, 63, 31, 12, 49, 36, 14, 86, 89, 45, 61, 22, 2, 57, 75, 51, 40, 30, 85, 5, 32, 94, 64, 66,
        20, 69, 71, 35, 79, 17, 90, 50, 23, 91, 80, 37, 8, 43, 10, 72, 74, 38, 56, 97, 1, 67, 44, 96, 53, 19, 93, 62,
        60, 25, 78, 48, 26, 81, 7, 28, 33, 4, 15, 84, 99, 42,
      ])
    ).toEqual([
      99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72,
      71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44,
      43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
      15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    ]);
  });

  it("Find max subarray", () => {
    expect(findMaxSubArray([100, 200, 300, 400], 2)).toBe(700);
    expect(findMaxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(findMaxSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it("Find sum of even number from object", () => {
    expect(
      findSumEvenNum({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      })
    ).toBe(6);

    expect(
      findSumEvenNum({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      })
    ).toBe(12);
  });
});
