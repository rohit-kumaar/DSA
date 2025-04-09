
#include <iostream>
using namespace std;

/* --------- */
// A B C D E
// A B C D E
// A B C D E
// A B C D E
// A B C D E
/* --------- */

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
            char result = 'A' + col - 1;
            cout << result << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}