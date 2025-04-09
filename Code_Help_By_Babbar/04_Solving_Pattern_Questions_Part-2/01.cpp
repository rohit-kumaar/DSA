#include <iostream>
using namespace std;

/* --------  */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* 1 2 3 4 5 */
/* --------  */

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
            cout << col << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}