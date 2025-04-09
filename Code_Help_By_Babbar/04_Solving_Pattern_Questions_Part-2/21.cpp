
#include <iostream>
using namespace std;

/* ------ */
// 11111
//  2222
//   333
//    44
//     5
/* ------ */

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
        int printNum = num - row + 1;
        while (col <= printNum)
        {
            cout << row;
            col++;
        }
        cout << endl;
        row++;
    }
}
