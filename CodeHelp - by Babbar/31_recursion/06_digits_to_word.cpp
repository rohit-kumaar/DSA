#include <iostream>
using namespace std;

void sayWord(int n, string arr[])
{
    if (n == 0)
        return;

    int digit = n % 10;
    n = n / 10;

    sayWord(n, arr);
    cout << arr[digit] << " ";
}

int main()
{
    int n;
    cout << "Enter a no.";
    cin >> n;

    string digitToWord[] = {"zero", "one", "two", "three", "four",
                            "five", "six", "seven", "eight", "nine"};

    cout << endl
         << endl
         << endl;
    sayWord(n, digitToWord);
    cout << endl
         << endl
         << endl;
}