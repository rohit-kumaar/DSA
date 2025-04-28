#include <iostream>
using namespace std;

int getPivot(int arr[], int size)
{
    int startIdx = 0;
    int endIdx = size - 1;
    int midIdx = startIdx + (endIdx - startIdx) / 2;

    while (startIdx < endIdx)
    {
        if (arr[midIdx] >= arr[0])
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

int binarySearch(int arr[], int start, int end, int target)
{
    int startIdx = start;
    int endIdx = end;
    int midIdx = startIdx + (endIdx - startIdx) / 2;

    while (startIdx <= endIdx)
    {
        if (target == arr[midIdx])
            return midIdx;

        if (target > arr[midIdx])
        {
            startIdx = midIdx + 1;
        }
        else
        {
            endIdx = midIdx - 1;
        }

        midIdx = startIdx + (endIdx - startIdx) / 2;
    }

    return -1;
}

int main()
{
    int arr[] = {8, 10, 17, 1, 3};
    int n = 5;
    int pivot = getPivot(arr, 5);
    int targetKey = 17;
    int ans = -1;
    if (targetKey >= arr[pivot] && targetKey <= arr[n - 1])
    {
        ans = binarySearch(arr, pivot, n - 1, targetKey);
    }
    else
    {
        ans = binarySearch(arr, 0, pivot - 1, targetKey);
    }

    cout << "The search value key is at index: " << ans << endl;
}