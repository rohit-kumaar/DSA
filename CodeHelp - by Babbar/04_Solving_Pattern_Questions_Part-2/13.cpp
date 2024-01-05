#include <iostream>
using namespace std;

/* -------- */
// A
// B B
// C C C
// D D D D
// E E E E E
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

        while (col <= row)
        {
            char result = 'A' + row - 1;
            cout << result << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}