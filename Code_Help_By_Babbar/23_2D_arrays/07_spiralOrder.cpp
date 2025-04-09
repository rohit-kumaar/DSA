#include <iostream>
#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>> &arr)
{
    int row = arr.size();
    int col = arr[0].size();

    int count = 0;
    int total = row * col;

    int startingRow = 0;
    int startingCol = 0;
    int endingRow = row - 1;
    int endingCol = col - 1;

    vector<int> ans;

    while (count < total)
    {
        // print starting row
        for (int i = startingCol; count < total && i <= endingCol; i++)
        {
            ans.push_back(arr[startingRow][i]);
            count++;
        }
        startingRow++;

        // print ending column
        for (int i = startingRow; count < total && i <= endingRow; i++)
        {
            ans.push_back(arr[i][endingCol]);
            count++;
        }
        endingCol--;

        // print ending row
        for (int i = endingCol; count < total && i >= startingCol; i--)
        {
            ans.push_back(arr[endingRow][i]);
            count++;
        }
        endingRow--;

        // print starting column
        for (int i = endingRow; count < total && i >= startingRow; i--)
        {
            ans.push_back(arr[i][startingCol]);
            count++;
        }
        startingCol++;
    }

    return ans;
}

int main()
{
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};

    vector<int> result = spiralOrder(matrix);

    for (int val : result)
    {
        cout << val << " ";
    }
    cout << endl;

    return 0;
}
