#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cout << "Enter the value of a " << endl;
    cin >> a;
    cout << "Enter the value of b " << endl;
    cin >> b;

    if (a > b)
    {
        cout << "a is greater " << endl;
    }

    if (b > a)
    {
        cout << "b is greater " << endl;
    }
}