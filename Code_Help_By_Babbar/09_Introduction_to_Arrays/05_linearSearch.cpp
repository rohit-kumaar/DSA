#include <iostream>
using namespace std;

bool search(int arr[], int size, int key)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == key)
        {
            return true;
        }
    }

    return false;
}

int main()
{
    int arr[10] = {5, 7, -2, 10, 22, -2, 0, 5, 22, 1};

    int key;
    cout << "Enter the number you want to search : ";
    cin >> key;

    bool found = search(arr, 10, key);

    if (found)
    {
        cout << "The value " << key << " is present ";
    }
    else
    {
        cout << "The value " << key << " is NOT present ";
    }

    return 0;
}