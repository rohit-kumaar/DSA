#include <iostream>
using namespace std;

// int main()
// {

//     int a = 4;
//     int b = 6;

//     cout << " a&b = " << (a & b) << endl;
//     cout << " a|b = " << (a | b) << endl;
//     cout << " ~a = " << ~a << endl;
//     cout << " a^b = " << (a ^ b) << endl;
// }

/* ---------------- */
// Experimentation
/* ---------------- */
// int main()
// {
//     cout << (17 >> 1) << endl;
//     cout << (17 >> 2) << endl;
//     cout << (19 << 1) << endl;
//     cout << (21 << 2) << endl;
// }

/* ------------------------------------- */
// Pre/Post Increment/Decrement Operator
/* ------------------------------------- */
// int main()
// {
//     int i = 7;

//     cout << (++i) << endl; // i = 8
//     cout << (i++) << endl; // i = 8
//     cout << (i--) << endl; // i = 9
//     cout << (--i) << endl; // i = 7
// }

/* ------------------------- */
// Homework Output Questions
/* ------------------------- */
// Question : 01
// int main()
// {
//     int a, b = 1;
//     a = 10;
//     if (++a)
//     {
//         cout << "Print if : " << b;
//     }
//     else
//     {
//         cout << "Print else : " << ++b;
//     }
// }

// Question : 02
// int main()
// {
//     int a = 1;
//     int b = 2;

//     if (a-- > 0 && ++b > 2)
//     {
//         cout << "Stage1 - Inside If" << endl;
//     }
//     else
//     {
//         cout << "Stage1 - Inside else" << endl;
//     }

//     cout << "a : " << a << endl
//          << "b : " << b << endl;
// }

// Question : 03
// int main()
// {
//     int number = 3;
//     cout << "number : " << (25 * (++number));
// }

// Question : 04
// int main()
// {
//     int a = 1;
//     int b = a++;
//     int c = ++a;

//     cout << "b : " << b << endl; // 1
//     cout << "c : " << c << endl; // 3
// }

/* --------- */
// For Loop
/* --------- */
// int main()
// {
//     // int n;
//     // cout << "Enter the value of n : " << endl;
//     // cin >> n;

//     // cout << "Printing count from 0 to n" << endl;
//     // for (int i = 1; i <= n; i++)
//     // {
//     //     cout << "The value of n : " << i << endl;
//     // }

//     // OR int i = 1;
//     // for (;;)
//     // {
//     //     if (i <= n)
//     //     {
//     //         cout << "The value of n : " << i << endl;
//     //     }
//     //     else
//     //     {
//     //         break;
//     //     }

//     //     i++;
//     // }

//     for (int a = 0, b = 1, c = 2; a >= 0 && b >= 1 && c >= 2; a--, b--, c--)
//     {
//         cout << "a : " << a << endl;
//         cout << "b : " << b << endl;
//         cout << "c : " << c << endl;
//     }
// }

/* ---------------- */
// Sum from 1 to n
/* ---------------- */
// int main()
// {
//     int n;
//     cout << "Enter the value of n : " << endl;
//     cin >> n;

//     int sum = 0;

//     for (int i = 1; i <= n; i++)
//     {
//         sum = sum + i;
//     }

//     cout << "Sum from 1 to n : " << sum << endl;
// }

/* ------------------------- */
// Fibonacci Series Question
/* ------------------------- */
// int main()
// {
//     int n;
//     cout << "Enter The value of n : " << endl;
//     cin >> n;

//     int a = 0;
//     int b = 1;
//     cout << a << " " << b << " ";

//     for (int i = 1; i <= n; i++)
//     {

//         int fib = a + b;
//         cout << fib << " ";

//         a = b;
//         b = fib;
//     }
// }

/* ------------ */
// Prime Number
/* ------------ */
// int main()
// {
//     int n;
//     cout << "Enter the number : " << endl;
//     cin >> n;

//     bool isPrime = 1;

//     for (int i = 2; i < n; i++)
//     {
//         if (n % i == 0)
//         {
//             isPrime = 0;
//             break;
//         }
//     }

//     if (isPrime == 0)
//     {
//         cout << "NOT a Prime number" << endl;
//     }
//     else
//     {
//         cout << "Is Prime number" << endl;
//     }
// }

/* -------- */
// Continue
/* -------- */
// int main()
// {
//     for (int i = 0; i < 5; i++)
//     {
//         cout << "1st" << endl;
//         cout << "2nd" << endl;
//         continue;
//         cout << "Last" << endl;
//     }
// }

/* ------------------------- */
// Homework Output Questions
/* ------------------------- */
// 01 int main()
// {
//     for (int i = 0; i <= 5; i++)
//     {
//         cout << i << " ";
//         i++;
//     }
// }

// 02
// int main()
// {
//     for (int i = 0; i <= 5; i--)
//     {
//         cout << i << " ";
//         i++;
//     }
// }

// 03
// int main()
// {
//     for (int i = 0; i <= 15; i += 2)
//     {
//         cout << i << " ";

//         if (i & 1)
//         {
//             continue;
//         }

//         i++;
//     }
// }

// 04
// int main()
// {

//     for (int i = 0; i < 5; i++)
//     {
//         for (int j = i; j <= 5; j++)
//         {
//             cout << i << " " << j << endl;
//         }
//     }
// }

// 05
// int main()
// {

//     for (int i = 0; i < 5; i++)
//     {
//         for (int j = i; j <= 5; j++)
//         {
//             if (i + j == 10)
//             {
//                 break;
//             }

//             cout << i << " " << j << endl;
//         }
//     }
// }

/* ---------------- */
// Variable Scoping
/* ---------------- */
int main()
{

    int a = 3;
    cout << a << endl;

    if (true)
    {
        int a = 5;
        cout << a << endl;
    }
}