#include <iostream>
using namespace std;

/* ----- */
/* 1 2 3 */
/* 4 5 6 */
/* 7 8 9 */
/* ----- */

int main()
{
    int num;
    cout << "Enter a number : ";
    cin >> num;

    int count = 1;
    int row = 1;

    while (row <= num)
    {
        int col = 1;

        while (col <= num)
        {
            cout << count << " ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
}