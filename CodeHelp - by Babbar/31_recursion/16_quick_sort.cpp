#include <iostream>
using namespace std;

int partition(int arr[], int s, int e)
{
    int pivot = arr[s];
    int count = 0;

    for (int i = s + 1; i <= e; i++)
    {
        if (arr[i] <= pivot)
        {
            count++;
        }
    }

    // place pivot at right place
    int pivotIdx = count + s;
    swap(arr[pivotIdx], arr[s]);

    // arrange left part or right part of pivot
    int i = s, j = e;

    while (i < pivotIdx && j > pivotIdx)
    {
        while (arr[i] <= pivot)
        {
            i++;
        }

        while (arr[j] > pivot)
        {
            j--;
        }

        if (i < pivotIdx && j > pivotIdx)
        {
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }

    return pivotIdx;
}

void quickSort(int arr[], int s, int e)
{
    // base case
    if (s >= e)
        return;

    // partition the array
    int p = partition(arr, s, e);

    // sort left part
    quickSort(arr, s, p - 1);

    // sort right part
    quickSort(arr, p + 1, e);
}

int main()
{
    int arr[5] = {2, 4, 1, 6, 9};
    int size = sizeof(arr) / sizeof(arr[0]);

    int s = 0;
    int e = size - 1;

    quickSort(arr, s, e);

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}