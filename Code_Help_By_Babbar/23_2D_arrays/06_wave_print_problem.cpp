#include <iostream>
#include <vector>
using namespace std;

void wavePrint(vector<int> &arr, int row, int col)
{
    // Create a 2D matrix
    int matrix[3][3]; // Assuming max size 3 for simplicity
    int idx = 0;

    // Fill the matrix column by column
    for (int n = 0; n < col; n++)
    {
        if ((n & 1) == 1)
        {
            // If the column is odd, go bottom to top
            for (int m = row - 1; m >= 0; m--)
            {
                matrix[m][n] = arr[idx++];
            }
        }
        else
        {
            // If the column is even, go top to bottom
            for (int m = 0; m < row; m++)
            {
                matrix[m][n] = arr[idx++];
            }
        }
    }

    // Print the matrix
    for (int m = 0; m < row; m++)
    {
        for (int n = 0; n < col; n++)
        {
            cout << matrix[m][n] << " ";
        }
        cout << endl;
    }
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int row = 3;
    int col = 3;

    wavePrint(arr, row, col);

    return 0;
}
