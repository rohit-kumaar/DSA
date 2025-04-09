#include <iostream>
using namespace std;

int main()
{
    int arr[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    for (int j = 0; j < 3; j++)
    {

        // if (j % 2 == 0)
        // {
        for (int i = 0; i < 3; i++)
        {

            cout << arr[i][j] << " ";
        }
        // }

        // if (j % 2 == 0)
        // {
        //     // Traverse top to bottom
        //     for (int i = 0; i < 3; i++)
        //     {

        //         cout << arr[i][j] << " ";
        //     }
        // }
        // else
        // {
        //     // Traverse from bottom to top
        //     for (int i = 2; i >= 0; i--)
        //     {
        //         cout << arr[i][j] << " ";
        //     }
        // }

        cout << endl;
    }

    return 0;
}