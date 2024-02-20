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

void rotateArr(int arr[], int size, int steps, int result[])
{
    for (int i = 0; i < size; i++)
    {
        result[(i + steps) % size] = arr[i];
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int size = sizeof(arr) / sizeof(arr[0]);
    int steps = 3;
    int rotatedArr[size];

    rotateArr(arr, size, steps, rotatedArr);
    printArr(rotatedArr, size);

    return 0;
}