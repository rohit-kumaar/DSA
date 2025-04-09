#include <iostream>
using namespace std;

int getMin(int num[], int size)
{

    int minNum = INT_MAX;

    for (int i = 0; i < size; i++)
    {
        minNum = min(minNum, num[i]);

        // if (num[i] < min)
        // {
        //     min = num[i];
        // }
    }

    return minNum;
}

int getMax(int num[], int size)
{

    int maxNum = INT_MIN;

    for (int i = 0; i < size; i++)
    {

        maxNum = max(maxNum, num[i]);

        // if (num[i] > max)
        // {
        //     max = num[i];
        // }
    }

    return maxNum;
}

int main()
{

    int size;
    cout << "Enter the size of array : ";
    cin >> size;

    int num[100];
    cout << "Enter the value of array : ";

    for (int i = 0; i < size; i++)
    {
        cin >> num[i];
    }

    cout << "Maximum value is : " << getMax(num, size) << endl;
    cout << "Minimum value is : " << getMin(num, size) << endl;
}