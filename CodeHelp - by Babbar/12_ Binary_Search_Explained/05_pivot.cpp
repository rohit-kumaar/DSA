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
    return startIdx;
}

int main()
{
    int arr[] = {8, 10, 17, 1, 3};
    cout << "Find pivot index in an array : " << pivot(arr, 5) << endl;
}