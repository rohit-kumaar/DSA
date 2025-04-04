#include <iostream>
using namespace std;

int main()
{
    int arr[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};

    int maxSum = INT_MIN;
    int rowIdx = -1;

    for (int i = 0; i < 3; i++)
    {
        int sum = 0;
        for (int j = 0; j < 4; j++)
        {
            sum = sum + arr[i][j];
            if (sum > maxSum)
            {
                maxSum = sum;
                rowIdx = i;
            }
        }
    }
    cout << "The largest row sum is : " << maxSum << endl;
    cout << "The largest row index is : " << rowIdx << " ";

    return 0;
}