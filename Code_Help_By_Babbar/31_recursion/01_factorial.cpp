#include <iostream>
using namespace std;

int factorial(int n)
{
    if (n == 0)
        return 1;

    return n * factorial(n - 1);
}

int main()
{
    int n;
    cout << "Enter factorial no : ";
    cin >> n;

    cout << "Factorial is : " << factorial(n);
}