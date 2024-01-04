#include <iostream>
using namespace std;

/* -------- */
// A
// B C
// C D E
// D E F G
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
        while (j <= i)
        {
            char start = i + j - 2 + 'A';
            cout << start << " ";
            j = j + 1;
        }
        cout << endl;

        i = i + 1;
    }
}