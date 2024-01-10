#include <iostream>
using namespace std;

void update(int arr[], int size)
{
    cout << "Inside the function" << endl;

    arr[0] = 120;

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Going back to the function" << endl;
}

int main()
{
    int arr[3] = {1, 2, 3};

    update(arr, 3);

    // print the array
    for (int i = 0; i < 3; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}