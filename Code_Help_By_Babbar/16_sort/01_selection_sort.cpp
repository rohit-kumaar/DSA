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

void selectionSort(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        int minIdx = i;

        for (int j = i + 1; j < size; j++)
        {
            if (arr[j] < arr[minIdx])
            {
                minIdx = j;
            }
        }
        swap(arr[minIdx], arr[i]);
    }
}

int main()
{
    int arr[9] = {29, 72, 98, 13, 87, 66, 52, 51, 36};
    int size = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, size);
    printArr(arr, size);
}