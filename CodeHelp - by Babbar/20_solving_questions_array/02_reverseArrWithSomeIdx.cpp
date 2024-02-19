#include <iostream>
using namespace std;

void printArr(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void reverseTheArrWithSomeIdx(int arr[], int size, int m)
{
    int i = m + 1;
    int j = size - 1;

    while (i <= j)
    {
        swap(arr[i], arr[j]);
        i++;
        j--;
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    int m = 3;

    reverseTheArrWithSomeIdx(arr, size, m);
    printArr(arr, size);

    return 0;
}