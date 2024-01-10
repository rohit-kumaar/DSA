#include <iostream>
#include <cmath>
using namespace std;

bool isPowerOfTwo(int n)
{
    if (n <= 0)
    {
        return 1;
    }

    return (n & (n - 1)) == 0;
}

int findPowerOfTwo(int n)
{
    if (isPowerOfTwo(n))
    {
        int power = log2(n);
        return power;
    }

    return 0;
}

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    if (isPowerOfTwo(num))
    {
        cout << "2^" << findPowerOfTwo(num) << " = " << num << " is a power of 2";
    }
    else
    {
        cout << num << " is not a power of 2";
    }
}