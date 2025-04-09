#include <iostream>
using namespace std;

int tripletsWithGivenSum(int arr[], int size, int triplets)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            for (int k = i + 2; k < size; k++)
            {
                if (arr[i] + arr[j] + arr[k] == triplets)
                {
                    cout << "The sum of " << arr[i] << " " << arr[j] << " " << arr[k] << " is equal to " << triplets << endl;
                }
            }
        }
    }
    return 0;
}

int main()
{

    int arr[5] = {1, 2, 3, 4, 5};
    int triplets = 12;

    cout << "The triplets is : " << tripletsWithGivenSum(arr, 5, triplets) << endl;

    return 0;
}