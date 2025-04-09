
#include <iostream>
using namespace std;

/* --------- */
// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E
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
            char result = 'A' + row - 1;
            cout << result << " ";
            col++;
        }
        cout << endl;
        row++;
    }
}
}