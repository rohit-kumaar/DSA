#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> intersectionOfTwoArray(int arr1[], int arr2[], int size1, int size2)
{
    vector<int> result;
    int i = 0, j = 0;

    while (i < size1 && j < size2)
    {
        if (arr1[i] == arr2[j])
        {
            result.push_back(arr1[i]);
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j])
        {
            i++;
        }
        else
        {
            j++;
        }
    }

    return result;
}

int main()
{
    int arr1[6] = {1, 2, 2, 2, 3, 4};
    int arr2[4] = {2, 2, 3, 3};

    vector<int> result = intersectionOfTwoArray(arr1, arr2, 6, 4);

    for (int num : result)
    {
        cout << num << " ";
    }
    cout << std::endl;

    return 0;
}
