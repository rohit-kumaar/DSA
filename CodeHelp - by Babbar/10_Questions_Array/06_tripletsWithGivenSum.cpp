#include <iostream>
using namespace std;

int tripletsWithGivenSum(int arr[], int size, int triplets)
{
    for (int i = 0; i < size; i++)
    {
        cout << "1st Loop Start" << endl;
        for (int j = i + 1; j < size; j++)
        {
            cout << "2nd Loop Start" << endl;
            for (int k = i + 2; k < size; k++)
            {
                cout << "3rd Loop Start" << endl;
                if (arr[i] + arr[j] + arr[k] == triplets)
                {
                    cout << "The sum of " << arr[i] << " " << arr[j] << " " << arr[k] << " is equal to " << triplets << endl;
                }
                cout << "3rd Loop End" << endl;
            }
            cout << "2nd Loop End" << endl;
        }
        cout << "1st Loop End" << endl;
    }
    return 0;
}

int main()
{

    int arr[5] = {1, 2, 3, 4, 5};
    int triplets = 12;

    cout << "The triplets is : " << tripletsWithGivenSum(arr, 5, triplets) << endl;
}