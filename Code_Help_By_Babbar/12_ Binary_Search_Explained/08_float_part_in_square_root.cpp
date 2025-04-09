#include <iostream>
using namespace std;

int sqrtInteger(int num)
{
    int startNum = 0;
    int endNum = num;
    long long int midNum = startNum + (endNum - startNum) / 2;
    long long int ans = -1;

    while (startNum <= endNum)
    {
        long long int sqrtOfNum = midNum * midNum;

        if (sqrtOfNum == num)
            return midNum;

        if (sqrtOfNum < num)
        {
            ans = midNum;
            startNum = midNum + 1;
        }
        else
        {
            endNum = midNum - 1;
        }
        midNum = startNum + (endNum - startNum) / 2;
    }
    return ans;
}

double morePrecision(int num, int precision, int tempSol)
{
    double factor = 1;
    double ans = tempSol;

    for (int i = 0; i < precision; i++)
    {
        factor = factor / 10;
        for (double j = ans; j * j < num; j = j + factor)
        {
            ans = j;
        }
    }
    return ans;
}

int main()
{
    int n;
    cout << "Enter any number you want to find square root : " << endl;
    cin >> n;

    int tempSol = sqrtInteger(n);
    cout << "Answer is : " << morePrecision(n, 3, tempSol) << endl;

    return 0;
}