#include <iostream>
using namespace std;

/* ------- */
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
/* ------- */

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int row = 1;

    while (row <= num)
    {
        int col = 1;

        while (col <= row)
        {
            cout << row + col - 1 << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}