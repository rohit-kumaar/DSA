
#include <iostream>
using namespace std;

int power(int a, int b)
{
    int ans = 1;

    for (int i = 1; i <= b; i++)
    {
        ans = ans * a;
    }

    return ans;
}

int main()
{
    int a;
    cout << "Enter the value of a : ";
    cin >> a;

    int b;
    cout << "Enter the value of b : ";
    cin >> b;

    int result = power(a, b);
    cout << "Power of the number" << a << "is : " << result << endl;

    return 0;
}