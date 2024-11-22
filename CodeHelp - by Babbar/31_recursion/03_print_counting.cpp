#include <iostream>
using namespace std;

int count(int n)
{
    if (n == 0)
        return 0;

    return (n * (n + 1)) / 2;
}

int main()
{
    int n;
    cout << "Enter no. : ";
    cin >> n;

    cout << "Counting no. is : " << count(n);
}