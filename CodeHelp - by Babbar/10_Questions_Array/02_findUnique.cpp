#include <iostream>
using namespace std;

int findUnique(int arr[], int size)
{
    int ans = 0;

    for (int i = 0; i < size; i++)
    {
        ans = ans ^ arr[i];
    }

    return ans;
}

int main()
{

    int arr1st[9] = {1, 3, 1, 3, 6, 6, 7, 10, 7};
    int arr2nd[5] = {2, 4, 7, 2, 7};
    int arr3rd[7] = {2, 3, 1, 6, 3, 6, 2};

    cout << "1st array unique number is : " << findUnique(arr1st, 9) << endl;
    cout << "2nd array unique number is : " << findUnique(arr2nd, 5) << endl;
    cout << "3rd array unique number is : " << findUnique(arr3rd, 7) << endl;
}
