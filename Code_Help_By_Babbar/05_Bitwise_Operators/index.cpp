#include <iostream>
using namespace std;

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
