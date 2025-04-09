

#include <iostream>
using namespace std;

/* --------- */
// A B C D E
// F G H I J
// K L M N O
// P Q R S T
// U V W X Y
/* --------- */

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int count = 1;
    int row = 1;

    while (row <= num)
    {
        int col = 1;
        while (col <= num)
        {
            char result = 'A' + count - 1;
            cout << result << " ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
}