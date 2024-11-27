#include <iostream>
using namespace std;

void sortArray(int arr[], int size)
{
    if (size == 0 || size == 1)
        return;

    for (int i = 0; i < size - 1; i++)
    {
        if (arr[i] > arr[i + 1])
        {
            swap(arr[i], arr[i + 1]);
        }
    }

    sortArray(arr, size - 1);
}

int main()
{
    int arr[] = {6, 2, 8, 4, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    sortArray(arr, size);
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}