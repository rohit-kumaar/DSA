#include <iostream>
#include <vector>
using namespace std;

void printArr(int arr3[], int size3)
{
    for (int i = 0; i < size3; i++)
    {
        cout << arr3[i] << " ";
    }
    cout << endl;
}

void mergeTwoSortedArr(int arr1[], int arr2[], int arr3[], int size1, int size2)
{
    int i = 0;
    int j = 0;
    int k = 0;

    while (i < size1 && j < size2)
    {
        if (arr1[i] < arr2[j])
        {
            arr3[k] = arr1[i];
            k++;
            i++;
        }
        else
        {
            arr3[k] = arr2[j];
            k++;
            j++;
        }
    }

    // copy first remaining array of arr1
    while (i < size1)
    {
        arr3[k] = arr1[i];
        k++;
        i++;
    }

    // copy first remaining array of arr2
    while (j < size2)
    {
        arr3[k] = arr2[j];
        k++;
        j++;
    }
}

int main()
{
    int arr1[] = {1, 3, 5, 7, 9};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {2, 4, 6};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    int size3 = size1 + size2;
    int arr3[size3] = {0};

    mergeTwoSortedArr(arr1, arr2, arr3, size1, size2);
    printArr(arr3, size3);

    return 0;
}