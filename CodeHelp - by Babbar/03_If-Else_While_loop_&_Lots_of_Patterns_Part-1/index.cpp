#include <iostream>
using namespace std;

/* ---------------------------------- */
/* NUMBER IS POSITIVE OR NEGATIVE     */
/* ---------------------------------- */
// int main() {
//   int n;
//   cin >> n;
//   // cout << "The value of n : " << n << endl;

//   if (n >= 0) {
//     cout << "The value of n is positive" << endl;
//   } else {
//     cout << "The value n is negative" << endl;
//   }
// }

/* -------------------- */
/* FIND GREATER NUMBER  */
/* -------------------- */
// int main() {
//   int a, b;
//   cout << "Enter the value of a " << endl;
//   cin >> a;
//   cout << "Enter the value of b " << endl;
//   cin >> b;

//   if (a > b) {
//     cout << "a is greater " << endl;
//   }

//   if (b > a) {
//     cout << "b is greater " << endl;
//   }
// }

/* ------------ */
/* WHILE LOOP   */
/* ------------ */
// int main() {
//   int n;
//   cin >> n;

//   int i = 1;

//   while (i <= n) {
//     cout << i << " ";
//     i = i + 1;
//   }
// }

/* ------------------------- */
/* SUM OF ALL THE NUMBERS    */
/* ------------------------- */
// int main() {
//   int n;
//   cin >> n;

//   int sum = 0;
//   int i = 1;

//   while (i <= n) {
//     sum = sum + i;
//     i = i + 1;
//     cout << "Value of sum is " << sum << endl;
//   }
// }

/* --------------------------- */
/* SUM OF ALL EVEN NUMBERS     */
/* --------------------------- */
// int main() {
//   int n;
//   cin >> n;

//   int sum = 0;
//   int i = 0;

//   while (i <= n) {
//     if (i % 2 == 0) {
//       sum = sum + i;
//       cout << "The sum of all even number is " << sum << endl;
//     }
//     i = i + 1;
//   }
// }

/* ---------------- */
/* NUMBER IS PRIME  */
/* ---------------- */
// int main() {
//   int n;
//   cin >> n;

//   int i = 2;
//   while (i < n) {
//     if (n % i == 0) {
//       cout << "Remainder = 0, not prime for " << i << endl;
//     } else {
//       cout << "Remainder != 0, prime for " << i << endl;
//     }
//     i = i + 1;
//   }
// }

/* --------  */
/* PATTERN 1 */
/*  * * *    */
/*  * * *    */
/*  * * *    */
/* --------  */
// int main() {
//   int n;
//   cin >> n;

//   int i = 1;

//   while (i <= n) {
//     int j = 1;
//     while (j <= n) {
//       cout << "* ";
//       j = j + 1;
//     }
//     cout << endl;

//     i = i + 1;
//   }
// }

/* --------  */
/* PATTERN 2 */
/*  1 1 1    */
/*  2 2 2    */
/*  3 3 3    */
/* --------  */
int main()
{

    int n;
    cin >> n;

    int i = 1;

    while (i <= n)
    {

        int j = 1;
        while (j <= n)
        {
            cout << i << " ";
            j = j + 1;
        }
        cout << endl;
        i = i + 1;
    }
}