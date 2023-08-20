// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

export const sort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return [...sort(leftArr), pivot, ...sort(rightArr)];
};

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

export const findMaxSubArray = (array, n) => {
  let max = array.slice(0, n).reduce((total, el) => {
    return total + el;
  }, 0);
  let tempMax = max;
  for (let i = n; i < array.length; i++) {
    const loopMax = tempMax - array[i - n] + array[i];
    max = Math.max(loopMax, max);
    tempMax = loopMax;
  }
  return max;
};

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

export const findSumEvenNum = (obj) => {
  let total = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      total = total + findSumEvenNum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      total = total + obj[key];
    }
  }
  return total;
};

console.log(
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
);
console.log(
  findSumEvenNum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  })
);
