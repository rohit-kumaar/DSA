
#include <iostream>
using namespace std;

/* -------------- */
// * * * * *
// * * * *
// * * *
// * *
// *
/* -------------- */

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int row = 1;
    while (row <= num)
    {
        int col = 1;
        int printStart = num - row + 1;
        while (col <= printStart)
        {
            cout << "*"
                 << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}