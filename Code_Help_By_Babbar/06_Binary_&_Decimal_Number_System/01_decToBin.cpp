#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int num;
    cout << "Enter the number you want to convert the decimal to binary : ";
    cin >> num;

    int ans = 0;
    int i = 0;

    while (num != 0)
    {
        int bit = num & 1;
        ans = ans + (bit * pow(10, i));
        num = num >> 1;
        i++;
    }

    cout << "The binary conversion is " << ans;
}