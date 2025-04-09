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

void rotateArr(int arr[], int size, int rotateFrom, int rotatedArr[])
{
    for (int i = 0; i < size; i++)
    {
        // result[(0 + 3) % 7] = arr[0];
        // result[(1 + 3) % 7] = arr[1];
        // result[(2 + 3) % 7] = arr[2];
        // result[(3 + 3) % 7] = arr[3];
        // result[(4 + 3) % 7] = arr[4];
        // result[(5 + 3) % 7] = arr[5];
        // result[(6 + 3) % 7] = arr[6];
        rotatedArr[(i + rotateFrom) % size] = arr[i];
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int size = sizeof(arr) / sizeof(arr[0]);
    int rotateFrom = 3;
    int rotatedArr[size] = {};

    rotateArr(arr, size, rotateFrom, rotatedArr);
    printArr(rotatedArr, size);
}