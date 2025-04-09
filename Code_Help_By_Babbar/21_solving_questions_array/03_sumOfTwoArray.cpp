#include <iostream>
#include <vector>
using namespace std;

vector<int> reverse(vector<int> &v)
{
    int s = 0;
    int e = v.size() - 1;

    while (s < e)
    {
        swap(v[s++], v[e--]);
    }

    return v;
}

vector<int> sumOfTwoArray(int arr1[], int arr2[], int size1, int size2)
{
    int i = size1 - 1;
    int j = size2 - 1;
    int carry = 0;
    vector<int> ans;

    while (i >= 0 && j >= 0)
    {
        int val1 = arr1[i];
        int val2 = arr2[j];

        int sum = val1 + val2 + carry;

        carry = sum / 10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
        j--;
    }

    // first case
    while (i >= 0)
    {
        int sum = arr1[i] + carry;
        carry = sum / 10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
    }

    // second case
    while (j >= 0)
    {
        int sum = arr2[j] + carry;
        carry = sum / 10;
        sum = sum % 10;
        ans.push_back(sum);
        j--;
    }

    // third case
    while (carry != 0)
    {
        int sum = carry;
        carry = sum / 10;
        sum = sum % 10;
        ans.push_back(sum);
    }

    reverse(ans);
    return ans;
}

int main()
{
    // int arr1[] = {1, 2, 3, 4};
    // int arr2[] = {6};

    // int arr1[] = {6};
    // int arr2[] = {1, 2, 3, 4};

    int arr1[] = {9, 9, 9};
    int arr2[] = {9, 9, 9};

    int size1 = sizeof(arr1) / sizeof(arr1[0]);
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    vector<int> result = sumOfTwoArray(arr1, arr2, size1, size2);

    cout << "Sum of the array is : ";

    for (int i : result)
    {
        cout << i;
    }

    cout << endl;

    return 0;
}
