#include <iostream>
using namespace std;

bool isPalindrome(char arr[], int size)
{
    int s = 0;
    int e = size - 1;

    while (s < e)
    {
        if (arr[s] != arr[e])
        {
            return 0;
        }
        else
        {
            s++;
            e--;
        }
    }

    return 1;
}

void reverseString(char name[], int length)
{
    int s = 0;
    int e = length - 1;

    while (s < e)
    {
        swap(name[s++], name[e--]);
    }
}

int getLength(char name[])
{
    int count = 0;

    for (int i = 0; name[i] != 0; i++)
    {
        count++;
    }

    return count;
}

int main()
{

    char name[20];

    cout << "Enter your name : " << endl;
    cin >> name;

    int length = getLength(name);

    reverseString(name, length);
    cout << "Is palindrome : " << isPalindrome(name, length) << endl;

    return 0;
}