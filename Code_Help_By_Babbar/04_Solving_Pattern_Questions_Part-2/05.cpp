#include <iostream>
using namespace std;

/* --------- */
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
/* --------- */

int main()
{
    int num;
    cout << "Enter a number : ";
    cin >> num;

    int count = 1;
    int row = 1;
    while (row <= num)
    {
        int col = 1;
        while (col <= row)
        {
            cout << row << " ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
}
