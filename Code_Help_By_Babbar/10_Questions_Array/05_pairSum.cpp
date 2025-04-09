#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<pair<int, int>> pairSum(int arr[], int size, int sum)
{
    vector<pair<int, int>> ans;

    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] + arr[j] == sum)
            {
                ans.push_back(make_pair(min(arr[i], arr[j]), max(arr[i], arr[j])));
            }
        }
    }

    sort(ans.begin(), ans.end());
    return ans;
}

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int sum = 5;

    vector<pair<int, int>> result = pairSum(arr, 5, sum);

    cout << "The pairs that sum up to " << sum << " are:" << endl;
    for (pair<int, int> p : result)
    {
        cout << "(" << p.first << ", " << p.second << ")" << endl;
    }

    return 0;
}
