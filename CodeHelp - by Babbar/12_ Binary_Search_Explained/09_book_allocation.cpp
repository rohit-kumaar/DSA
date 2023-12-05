#include <iostream>
using namespace std;

bool isPossible(int arr[], int size, int student, int midVal)
{
    int studentCount = 1;
    int pageSum = 0;

    for (int i = 0; i < size; i++)
    {
        if (pageSum + arr[i] < midVal)
        {
            pageSum += arr[i];
        }
        else
        {
            studentCount++;
            if (studentCount > student || arr[i] > midVal)
            {
                return false;
            }
            pageSum = arr[i];
        }
    }
    return true;
}

int main()
{
    int arr[] = {10, 20, 30, 40};
    int size = 4;
    int student = 2;

    int startVal = 0;
    int sum = 0;

    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
    }

    int endVal = sum;
    int ans = -1;
    int midVal = startVal + (endVal - startVal) / 2;

    while (startVal <= endVal)
    {
        if (isPossible(arr, size, student, midVal))
        {
            ans = midVal;
            endVal = midVal - 1;
        }
        else
        {
            startVal = midVal + 1;
        }

        midVal = startVal + (endVal - startVal) / 2;
    }
    cout << "Answer is : " << ans;
}