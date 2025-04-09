#include <iostream>
using namespace std;

int squareRoot(int num)
{
    int start = 0;
    int end = num;
    long long int mid = start + (end - start) / 2;
    long long int ans = -1;

    while (start <= end)
    {
        long long int sqRoot = mid * mid;

        if (sqRoot == num)
            return mid;

        if (sqRoot < num)
        {
            ans = mid;
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
        mid = start + (end - start) / 2;
    }

    return ans;
}

int main()
{
    int num = 1000000;
    cout << "The square root of " << num << " is : " << squareRoot(num) << endl;
}