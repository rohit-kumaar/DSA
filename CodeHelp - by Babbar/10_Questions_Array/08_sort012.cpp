#include <iostream>
using namespace std;

int swap012(int arr[], int size)
{
    int low = 0;
    int mid = 0;
    int high = size - 1;

    while (mid < high)
    {
        switch (arr[mid])
        {
        case 0:
            swap(arr[low], arr[mid]);
            low++;
            mid++;
            break;

        case 1:
            mid++;
            break;

        case 2:
            swap(arr[mid], arr[high]);
            high--;
            break;
        }
    }

    return 0;
}

int printOutput(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}

int main()
{
    int arr[9] = {0, 2, 2, 1, 0, 1, 1, 0, 2};
    int size = sizeof(arr) / sizeof(arr[0]);

    swap012(arr, size);
    printOutput(arr, size);

    return 0;
}