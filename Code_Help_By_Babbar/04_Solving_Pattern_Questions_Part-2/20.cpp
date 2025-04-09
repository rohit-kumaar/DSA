

#include <iostream>
using namespace std;

/* ----------- */
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
/* ----------- */

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int row = 1;
    while (row <= num)
    {
        int space = row - 1;
        while (space)
        {
            cout << " ";
            space--;
        }

        int col = 1;
        int printStar = num - row + 1;
        while (col <= printStar)
        {
            cout << "*";
            col++;
        }
        cout << endl;
        row++;
    }
}