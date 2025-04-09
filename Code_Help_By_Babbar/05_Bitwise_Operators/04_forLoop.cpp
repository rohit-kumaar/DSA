#include <iostream>
using namespace std;

/* --------- */
// For Loop
/* --------- */
int main()
{
    // int n;
    // cout << "Enter the value of n : " << endl;
    // cin >> n;

    // cout << "Printing count from 0 to n" << endl;
    // for (int i = 1; i <= n; i++)
    // {
    //     cout << "The value of n : " << i << endl;
    // }

    // OR int i = 1;
    // for (;;)
    // {
    //     if (i <= n)
    //     {
    //         cout << "The value of n : " << i << endl;
    //     }
    //     else
    //     {
    //         break;
    //     }

    //     i++;
    // }

    for (int a = 0, b = 1, c = 2; a >= 0 && b >= 1 && c >= 2; a--, b--, c--)
    {
        cout << "a : " << a << endl;
        cout << "b : " << b << endl;
        cout << "c : " << c << endl;
    }
}