#include <iostream>
using namespace std;

/* --------  */
/* PATTERN 1 */
/*  * * *    */
/*  * * *    */
/*  * * *    */
/* --------  */
int main()
{
    int num;
    cout << "Enter the order of the matrix : ";
    cin >> num;

    int i = 1;

    while (i <= num)
    {
        int j = 1;

        while (j <= num)
        {
            cout << "* ";
            j++;
        }
        cout << endl;
        i++;
    }
}