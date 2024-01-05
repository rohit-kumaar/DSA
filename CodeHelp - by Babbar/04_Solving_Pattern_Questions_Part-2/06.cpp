#include <iostream>
using namespace std;

/* ----------------  */
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
/* ----------------  */

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
            cout << count << " ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
}