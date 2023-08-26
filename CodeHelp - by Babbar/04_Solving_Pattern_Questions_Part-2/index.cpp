#include <iostream>
using namespace std;

// 01
/* --------  */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* --------  */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= n)
//         {
//             cout << j << " ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 02
/* --------  */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* --------  */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;

//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= n)
//         {

//             cout << n - j + 1 << " ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 03
/* ----- */
/* 1 2 3 */
/* 4 5 6 */
/* 7 8 9 */
/* ----- */
// int main()
// {

//     int n;
//     cin >> n;

//     int i = 1;
//     int count = 1;
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= n)
//         {
//             cout << count << " ";
//             count = count + 1;
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 04
/* -------------- */
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *
/* -------------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= i)
//         {

//             cout << "*"
//                  << "  ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 05
/* --------- */
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
/* --------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;

//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= i)
//         {
//             cout << i << " ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 06
/* ----------------  */
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
/* ----------------  */
// int main()
// {
//     int n;
//     cin >> n;
//     int count = 1;
//     int i = 1;

//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= i)
//         {
//             cout << count << " ";
//             count = count + 1;
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 07
/* ------- */
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
/* ------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;

//         while (j <= i)
//         {
//             cout << i + j - 1 << " ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 08
/* ---------- */
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
/* ---------- */
// int main()
// {

//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= i)
//         {
//             cout << i - j + 1 << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 09
/* --------- */
// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E
/* --------- */
// int main()
// {

//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= n)
//         {
//             char ch = 'A' + i - 1;
//             cout << ch << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 10
/* --------- */
// A B C D E
// A B C D E
// A B C D E
// A B C D E
// A B C D E
/* --------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= n)
//         {
//             char ch = 'A' + j - 1;
//             cout << ch << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 11
/* --------- */
// A B C D E
// F G H I J
// K L M N O
// P Q R S T
// U V W X Y
/* --------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     char start = 'A';
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= n)
//         {
//             cout << start << " ";
//             start = start + 1;
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 12
/* -------- */
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
/* -------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= n)
//         {
//             char start = i + j - 2 + 'A';
//             cout << start << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 13
/* -------- */
// A
// B B
// C C C
// D D D D
// E E E E E
/* -------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= i)
//         {
//             char start = 'A' + i - 1;
//             cout << start << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 14
/* -------- */
// A
// B C
// D E F
// G H I J
// K L M N O
/* -------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     char count = 'A';
//     while (i <= n)
//     {

//         int j = 1;
//         while (j <= i)
//         {
//             cout << count << " ";
//             count = count + 1;
//             j = j + 1;
//         }

//         cout << endl;
//         i = i + 1;
//     }
// }

// 15
/* -------- */
// A
// B C
// C D E
// D E F G
// E F G H I
/* -------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= i)
//         {
//             char start = i + j - 2 + 'A';
//             cout << start << " ";
//             j = j + 1;
//         }
//         cout << endl;

//         i = i + 1;
//     }
// }

// 16
/* -------- */
// E
// D E
// C D E
// B C D E
// A B C D E
/* -------- */
// int main()
// {

//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int j = 1;
//         char start = 'A' + n - i;
//         while (j <= i)
//         {
//             cout << start << " ";
//             start = start + 1;
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 17
/* ------ */
//       *
//     * *
//   * * *
// * * * *
/* ------ */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int space = n - i;
//         while (space)
//         {
//             cout << " ";
//             space = space - 1;
//         }

//         int j = 1;
//         while (j <= i)
//         {
//             cout << "*";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 18
/* ------- */
//    *
//   * *
//  * * *
// * * * *
/* ------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int space = n - i;
//         while (space)
//         {
//             cout << " ";
//             space = space - 1;
//         }

//         int j = 1;
//         while (j <= i)
//         {
//             cout << "*"
//                  << " ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 19
/* -------------- */
//  *  *  *  *  *
//  *  *  *  *
//  *  *  *
//  *  *
//  *
/* -------------- */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;

//     while (i <= n)
//     {
//         int j = 1;
//         while (j <= n - i + 1)
//         {
//             cout << " * ";
//             j = j + 1;
//         }
//         cout << endl;
//         i = i + 1;
//     }
// }

// 20
/* ------ */
// * * * *
//   * * *
//     * *
//       *
/* ------ */
// int main()
// {
//     int n;
//     cin >> n;

//     int i = 1;
//     while (i <= n)
//     {
//         int space = i - 1;
//         while (space)
//         {
//             cout << " ";
//             space = space - 1;
//         }

//         int j = 1;
//         while (j <= n - i + 1)
//         {
//             cout << "*";
//             j = j + 1;
//         }

//         cout << endl;
//         i = i + 1;
//     }
// }

// 21
/* ------ */
// 11111
//  2222
//   333
//    44
//     5
/* ------ */
int main()
{

    int n;
    cin >> n;

    int i = 1;
    while (i <= n)
    {

        int space = i - 1;
        while (space)
        {
            cout << " ";
            space = space - 1;
        }

        int j = 1;
        while (j <= n - i + 1)
        {
            cout << i;
            j = j + 1;
        }

        cout << endl;
        i = i + 1;
    }
}
