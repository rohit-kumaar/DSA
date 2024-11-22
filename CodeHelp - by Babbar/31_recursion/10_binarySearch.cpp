#include <iostream>
using namespace std;

void print(int arr[], int s, int e)
{
    for (int i = s; i <= e; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

bool binarySearch(int arr[], int start, int end, int search)
{
    cout << endl;
    print(arr, start, end);

    if (start > end)
        return false;

    int mid = start + (end - start) / 2;
    cout << "Mid value is : " << arr[mid] << endl;

    if (arr[mid] == search)
        return true;

    if (arr[mid] < search)
    {
        return binarySearch(arr, mid + 1, end, search);
    }
    else
    {
        return binarySearch(arr, start, mid - 1, search);
    }
}

int main()
{
    int arr[5] = {2, 4, 6, 8, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    int search = 8;

    int start = 0;
    int end = size - 1;

    bool ans = binarySearch(arr, start, end, search);

    if (ans)
    {
        cout << "Present" << endl;
    }
    else
    {
        cout << "Absent " << endl;
    }
    return 0;
}