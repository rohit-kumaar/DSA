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

void sort01(int arr[], int size)
{
    int i = 0;
    int j = size - 1;
    
    while (i < j)
    {
        while (arr[i] == 0 && i < j)
        {
            i++;
        }

        while (arr[j] == 1 && i < j)
        {
            j--;
        }

        if (i < j)
        {
            swap(arr[i], arr[j]);
            i++;
            j--;
        }
    }
}

int main()
{
    int arr[8] = {1, 1, 0, 0, 0, 0, 1, 0};
    int size = 8;

    sort01(arr, size);
    printArr(arr, size);
}