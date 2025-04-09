#include <iostream>
using namespace std;

/* --------  */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* 5 4 3 2 1 */
/* --------  */

int main()
{
    int num;
    cout << "Enter a number : ";
    cin >> num;

    int row = 1;

    while (row <= num)
    {
        int col = 1;

        while (col <= num)
        {
            cout << num - col + 1 << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}