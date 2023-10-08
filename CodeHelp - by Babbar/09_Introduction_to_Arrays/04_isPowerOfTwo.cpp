#include <iostream>
using namespace std;

bool isPowerOfTwo(int n)
{
    if (n <= 0)
    {
        return false; // Negative numbers and zero are not powers of 2
    }
    return (n & (n - 1)) == 0;
}

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    if (isPowerOfTwo(num))
    {
        cout << num << " is a power of 2." << endl;
    }
    else
    {
        cout << num << " is not a power of 2." << endl;
    }

    return 0;
}
