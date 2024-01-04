#include <iostream>
using namespace std;

/* --------  */
/* PATTERN 2 */
/*  1 1 1    */
/*  2 2 2    */
/*  3 3 3    */
/* --------  */
int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int i = 1;

    while (i <= num)
    {
        int j = 1;

        while (j <= num)
        {
            cout << i << " ";
            j++;
        }
        cout << endl;
        i++;
    }
}