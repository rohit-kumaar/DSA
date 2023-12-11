#include <iostream>
#include <algorithm>
using namespace std;

bool canPlaceCows(int distance, int cows, int positions[], int n)
{
    int last_position = positions[0];
    int count = 1;

    for (int i = 1; i < n; ++i)
    {
        if (positions[i] - last_position >= distance)
        {
            last_position = positions[i];
            count++;
        }
    }

    return count >= cows;
}

int aggressiveCows(int positions[], int n, int cows)
{
    sort(positions, positions + n);

    int low = 1, high = positions[n - 1] - positions[0];
    int maxDistance = -1;

    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (canPlaceCows(mid, cows, positions, n))
        {
            maxDistance = max(maxDistance, mid);
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    return maxDistance;
}

int main()
{
    int arr[5] = {4, 2, 1, 3, 6};
    int n = 5;
    int cows = 2; // Number of cows to be placed

    int result = aggressiveCows(arr, n, cows);

    cout << "The maximum minimum distance between cows is: " << result << endl;

    return 0;
}
