
#include <iostream>
using namespace std;

int factorial(int n)
{

    int fact = 1;

    for (int i = 1; i <= n; i++)
    {
        fact = fact * i;
    }

    return fact;
}

int nCr(int n, int r)
{

    int num = factorial(n);

    int denom = factorial(r) * factorial(n - r);

    return num / denom;
}

int main()
{
    int n, r;
    cout << "Total number of item n : ";
    cin >> n;

    cout << "Choose r element at a time : ";
    cin >> r;

    int result = nCr(n, r);
    cout << "nCr : " << result;
}