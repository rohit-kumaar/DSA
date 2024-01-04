

#include <iostream>
using namespace std;

/* -------- */
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
/* -------- */

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
            char start = i + j - 2 + 'A';
            cout << start << " ";
            j = j + 1;
        }
        cout << endl;
        i = i + 1;
    }
}