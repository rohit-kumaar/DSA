

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
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int row = 1;

    while (row <= num)
    {
        int col = 1;

        while (col <= num)
        {
            char result = 'A' + col + row - 2;
            cout << result << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}