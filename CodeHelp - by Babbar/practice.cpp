#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int key)
{
    int leftIndex = 0;
    int rightIndex = size - 1;
    int middleIndex = leftIndex + (rightIndex - leftIndex) / 2;

    while (leftIndex <= rightIndex)
    {
        if (arr[middleIndex] == key)
        {
            return middleIndex;
        }

        if (key > arr[middleIndex])
        {
            leftIndex = middleIndex + 1;
        }
        else
        {
            rightIndex = middleIndex - 1;
        }
        middleIndex = leftIndex + (rightIndex - leftIndex) / 2;
    }
    return -1;
}

int main()
{
    int arr[6] = {2, 3, 4, 5, 6, 7};
    cout << "Index of 20 is : " << binarySearch(arr, 6, 20) << endl;
}
