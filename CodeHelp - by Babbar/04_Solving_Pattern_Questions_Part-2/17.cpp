#include <iostream>
using namespace std;

/* ------ */
//       *
//     * *
//   * * *
// * * * *
/* ------ */

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int row = 1;
    while (row <= num)
    {
        int space = num - row;
        while (space)
        {
            cout << " ";
            space--;
        }

        int col = 1;
        while (col <= row)
        {
            cout << "*";
            col++;
        }
        cout << endl;
        row++;
    }
}