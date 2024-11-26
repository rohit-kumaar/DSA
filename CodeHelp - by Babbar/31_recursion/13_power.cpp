#include <iostream>
using namespace std;

int power(int a, int b)
{
    // base case
    if (b == 0)
        return 1;

    if (b == 1)
        return a;

    // recursive call
    int ans = power(a, b / 2);

    // id b is even
    if (b % 2 == 0)
    {
        return ans * ans;
    }
    else
    {
        // if b is odd
        return a * ans * ans;
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