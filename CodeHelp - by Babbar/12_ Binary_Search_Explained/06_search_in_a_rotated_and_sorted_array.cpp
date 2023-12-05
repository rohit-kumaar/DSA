#include <iostream>
using namespace std;

int getPivot(int arr[], int size)
{
    int startIdx = 0;
    int endIdx = size;
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

int binarySearch(int arr[],int start, int end, int target)
{
    int starIdx = start;
    int endIdx = end;
    int midIdx = starIdx + (endIdx - starIdx) / 2;

    while (starIdx <= endIdx)
    {
        if (target == arr[midIdx])
            return midIdx;

        if (target > arr[midIdx])
        {
            starIdx = midIdx + 1;
        }
        else
        {
            endIdx = midIdx - 1;
        }

        midIdx = starIdx + (endIdx - starIdx) / 2;
    }

    return starIdx;
}

int main()
{
    int arr[] = {8, 10, 17, 1, 3};
    int pivot = getPivot(arr, 5);
    int targetKey = 17;
    if (targetKey >= pivot && targetKey <= arr[5])
    {
        cout << "The search value key is : " << binarySearch(arr, pivot, arr[5], targetKey) << endl;
    }
    else
    {
        cout << "The search value key is : " << binarySearch(arr, 0, pivot - 1, targetKey) << endl;
    }
}