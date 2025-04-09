#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int sum = 0;
    int i = 0;

    while (i <= n)
    {
        if (i % 2 == 0)
        {
            sum = sum + i;
            cout << "The sum of all even number is " << sum << endl;
        }
        i = i + 1;
    }
}