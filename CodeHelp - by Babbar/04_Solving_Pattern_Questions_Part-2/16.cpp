
#include <iostream>
using namespace std;

/* -------- */
// E
// D E
// C D E
// B C D E
// A B C D E
/* -------- */

int main()
{
    int num;
    cout << "Enter a number : ";
    cin >> num;

    int row = 1;

    while (row <= num)
    {
        int col = 1;
        char result = 'A' + num - row;

        while (col <= row)
        {
            cout << result << " ";
            result++;
            col++;
        }
        cout << endl;
        row++;
    }
}