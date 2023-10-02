
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
    cout << "Enter the value of n : ";
    cin >> n;

    cout << "Enter the value of r : ";
    cin >> r;

    int result = nCr(n, r);
    cout << "Given " << n << " objects, the number of different ways to choose " << r << " of them is : " << result << endl;
}