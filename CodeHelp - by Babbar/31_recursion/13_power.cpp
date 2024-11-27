#include <iostream>
using namespace std;

int power(int a, int b)
{
    // base case
    if (b == 0)
        return 1;

    if (b == 1)
        return a;

    // id b is even
    if (b % 2 == 0)
    {
        return power(a, b / 2) * power(a, b / 2);
    }
    else
    {
        // if b is odd
        return a * power(a, b - 1);
    }
}

int main()
{
    int a, b;
    cout << "Enter the value of a : ";
    cin >> a;
    cout << "Enter the value of b : ";
    cin >> b;

    int ans = power(a, b);
    cout << "a^b : " << ans << endl;
    return 0;
}