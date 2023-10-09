#include <iostream>
using namespace std;

void swapAlternate(int arr[], int size)
{
    for (int i = 0; i < size; i = i + 2)
    {
        if (i + 1 < size)
        {
            swap(arr[i], arr[i + 1]);
        }
    }
}

void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{

    int even[8] = {2, 4, 7, 1, 33, 76, 34, 56};
    int odd[7] = {1, 3, 5, 7, 9, 11, 12};

    swapAlternate(even, 8);
    printArray(even, 8);

    cout << endl;

    swapAlternate(odd, 7);
    printArray(odd, 7);
}