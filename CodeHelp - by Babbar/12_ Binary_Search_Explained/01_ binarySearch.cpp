#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int mid = start + (end - start) / 2;

    while (start <= end)
    {
        if (arr[mid] == key)
        {
            return mid;
        }

        if (key > arr[mid])
        {
            start = mid + 1;
        }
        else
        {
            end = mid + 1;
        }

        mid = start + (end - start) / 2;
    }

    return -1;
}

int main()
{
    int even[6] = {2, 4, 6, 8, 12, 18};
    int evenArrSize = sizeof(even) / sizeof(even[0]);
    int searchInEvenArr = 12;

    int odd[5] = {3, 8, 11, 14, 16};
    int oddArrSize = sizeof(odd) / sizeof(odd[0]);
    int searchInOddArr = 8;

    int evenIndex = binarySearch(even, evenArrSize, searchInEvenArr);
    cout << "Even index of 12 is : " << evenIndex << endl;

    int oddIndex = binarySearch(odd, oddArrSize, searchInOddArr);
    cout << "Odd index of 8 is : " << oddIndex << endl;

    return 0;
}