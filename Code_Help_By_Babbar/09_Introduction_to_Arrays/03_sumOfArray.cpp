#include <iostream>
using namespace std;

int sumOfArr(int arr[], int size)
{

    int sum = 0;

    for (int i = 0; i < size; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

int main()
{
    int size;
    cout << "Enter the size of array : ";
    cin >> size;

    int arr[100];
    cout << "Enter the value of array : ";

    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

    cout << "The sum of the array is : " << sumOfArr(arr, size) << endl;
}