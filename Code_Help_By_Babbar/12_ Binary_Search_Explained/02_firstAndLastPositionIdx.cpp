#include <iostream>
using namespace std;

int firstOcc(int arr[], int size, int key)
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

int lastOcc(int arr[], int size, int key)
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

int main()
{
    int even[7] = {1, 2, 3, 3, 3, 3, 5};
    int evenSizeArr = sizeof(even) / sizeof(even[0]);
    int searchVal = 3;

    cout << "The first Idx is : " << firstOcc(even, evenSizeArr, searchVal) << endl;
    cout << "The last Idx is : " << lastOcc(even, evenSizeArr, searchVal) << endl;
}