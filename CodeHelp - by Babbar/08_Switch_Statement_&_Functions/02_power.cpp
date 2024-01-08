
#include <iostream>
using namespace std;

int main()
{
    int a, b, ans = 1;

    cout << "Value of a : ";
    cin >> a;

    cout << "Value of b : ";
    cin >> b;

    for (int i = 1; i <= b; i++)
    {
        ans = ans * a;
    }

    cout << a << "^" << b << " = " << ans;
}