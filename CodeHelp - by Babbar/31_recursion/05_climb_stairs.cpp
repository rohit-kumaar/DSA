#include <iostream>
using namespace std;

int climbStair(int n)
{
    if (n < 0)
        return 0;

    if (n == 0)
        return 1;

    int ans = climbStair(n - 1) + climbStair(n - 2);
    return ans;
}

int main()
{
    int n;
    cout << "Enter a steps : ";
    cin >> n;

    cout << "Ways to climb to the top : " << climbStair(n) << endl;
}