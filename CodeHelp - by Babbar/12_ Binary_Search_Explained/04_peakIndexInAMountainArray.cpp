#include <iostream>
using namespace std;

int peakIndexInAMountainArray(int arr[], int size)
{
    int startIdx = 0;
    int endIdx = size - 1;
    int midIdx = startIdx + (endIdx - startIdx) / 2;

    while (startIdx < endIdx)
    {
        if (arr[midIdx] < arr[midIdx + 1])
        {
            startIdx = midIdx + 1;
        }
        else
        {
            endIdx = midIdx;
        }

        midIdx = startIdx + (endIdx - startIdx) / 2;
    }

    return startIdx;
}

int main()
{
    // int arr[] = {0, 2, 1, 0};
    // int arr[] = {0,1,0};
    int arr[] = {0, 1, 10, 5, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    cout << "Peak index in a mountain array index is : " << peakIndexInAMountainArray(arr, size) << endl;
}