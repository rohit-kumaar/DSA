#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int num;
    cout << "Enter the binary number : ";
    cin >> num;

    int ans = 0;
    int power = 0;

    while (num != 0)
    {
        int digit = num % 10;

        if (digit == 1)
        {
            ans = ans + pow(2, power);
        }
        num = num / 10;
        power++;
    }
    cout << "The decimal number is : " << ans;
}