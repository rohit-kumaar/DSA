#include <iostream>
using namespace std;

int findDuplicate(int arr[], int size)
{
    int ans = 0;

    for (int i = 0; i < size; i++)
    {
        ans = ans ^ arr[i];
    }

    for (int i = 1; i < size; i++)
    {
        ans = ans ^ i;
    }

    return ans;
}

int main()
{
    int arr[6] = {5, 1, 2, 3, 4, 2};
    // int arr[5] = {2, 2, 2, 2, 2};

    cout << "The duplicate value is : " << findDuplicate(arr, 6) << endl;
}