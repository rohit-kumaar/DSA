#include <iostream>
#include <vector>
using namespace std;

bool checkRotatedSortedArray(const vector<int> &nums)
{
    int count = 0;
    int n = nums.size();

    for (int i = 1; i < n; i++)
    {
        if (nums[i - 1] > nums[i])
        {
            count++;
        }
    }

    if (nums[n - 1] > nums[0])
    {
        count++;
    }

    return count <= 1;
}

int main()
{
    // Example usage:
    vector<int> exampleVector = {4, 5, 6, 7, 0, 1, 2};
    bool result = checkRotatedSortedArray(exampleVector);

    // Print the result
    if (result)
    {
        cout << "The array is a rotated sorted array with at most one rotation." << endl;
    }
    else
    {
        cout << "The array is not a rotated sorted array with at most one rotation." << endl;
    }

    return 0;
}
