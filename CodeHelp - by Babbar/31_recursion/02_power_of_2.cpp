#include <iostream>
using namespace std;

int powerOfTwo(int n)
{
    if (n == 0)
        return 1;

    return 2 * powerOfTwo(n - 1);
}

int main()
{
    int n;
    cout << "Enter the power of 2 : ";
    cin >> n;

    cout << "Power of 2 is : " << powerOfTwo(n);

    return 0;
}