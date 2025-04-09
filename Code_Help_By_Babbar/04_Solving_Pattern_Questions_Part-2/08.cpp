#include <iostream>
using namespace std;

/* ---------- */
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
/* ---------- */

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
            cout << row - col + 1 << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}