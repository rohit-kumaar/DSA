#include <iostream>
using namespace std;

// For Testing
int print(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
// For Testing

bool linearSearch(int arr[], int size, int search)
{
    print(arr, size);

    if (size == 0)
        return 0;

    if (arr[0] == search)
    {
        return true;
    }
    else
    {
        bool remainingPart = linearSearch(arr + 1, size - 1, search);
        return remainingPart;
    }
}

int main()
{
    int arr[5] = {2, 4, 6, 8, 10};
    int size = 5;
    int search = 10;

    bool ans = linearSearch(arr, size, search);

    if (ans)
    {
        cout << "Present" << endl;
    }
    else
    {
        cout << "Absent" << endl;
    }

    return 0;
}