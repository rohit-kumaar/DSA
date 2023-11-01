#include <iostream>
using namespace std;

int firstIdxFun(int arr[], int size, int key)
{
    int startIdx = 0;
    int endIdx = size - 1;
    int midIdx = startIdx + (endIdx - startIdx) / 2;
    int ans;

    while (startIdx <= endIdx)
    {
        if (key == arr[midIdx])
        {
            ans = midIdx;
            endIdx = midIdx - 1;
        }
        else if (key > arr[midIdx])
        {
            startIdx = midIdx + 1;
        }
        else if (key < arr[midIdx])
        {
            endIdx = midIdx - 1;
        }

        midIdx = startIdx + (endIdx - startIdx) / 2;
    }

    return ans;
}

int lastIdxFun(int arr[], int size, int key)
{
    int startIdx = 0;
    int endIdx = size - 1;
    int midIdx = startIdx + (endIdx - startIdx) / 2;
    int ans;

    while (startIdx <= endIdx)
    {
        if (key == arr[midIdx])
        {
            ans = midIdx;
            startIdx = midIdx + 1;
        }
        else if (key > arr[midIdx])
        {
            startIdx = midIdx + 1;
        }
        else if (key < arr[midIdx])
        {
            endIdx = midIdx - 1;
        }

        midIdx = startIdx + (endIdx - startIdx) / 2;
    }

    return ans;
}

int totalNumOfOcc(int arr[], int size, int key)
{

    int firstIdx;
    int lastIdx;
    int ans;

    firstIdx = firstIdxFun(arr, size, key);
    lastIdx = lastIdxFun(arr, size, key);
    ans = (lastIdx - firstIdx) + 1;

    return ans;
}

int main()
{
    int arr[7] = {1, 2, 3, 3, 3, 3, 5};
    int key = 3;

    cout << "The total num of occurrence number " << key << " is : " << totalNumOfOcc(arr, 7, key) << endl;
}