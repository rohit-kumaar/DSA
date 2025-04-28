#include <iostream>
using namespace std;

int pivot(int arr[], int size)
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
    return arr[startIdx];
}

int main()
{
    int arr[] = {6, 7, 8, 9, 1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Pivot value : " << pivot(arr, size) << endl;
}