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

void mergeSortedArray(int arr1[], int arr2[], int size1, int size2)
{
    int i = 0;
    int j = 0;

    while (i < size1 && j < size2)
    {
        if(arr1[i] < arr2[j])
        {
            arr1[i++] = arr2[j];
        }else{
             arr1[i++] = arr2[j];
        }
    }
}

int main()
{

    int arr1[] = {1, 2, 3};
    int size1 = sizeof(arr1) / sizeof(arr[0]);

    int arr2[] = {2, 5, 6};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    mergeSortedArray(arr1, arr2, size1, size2);
    printArr(arr1, size1);
}