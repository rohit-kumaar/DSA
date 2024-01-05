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
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int count = 1;
    int row = 1;

    while (row <= num)
    {
        int col = 1;

        while (col <= row)
        {
            char result = 'A' + row + col - 2;
            cout << result << " ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
}