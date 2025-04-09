#include <iostream>
using namespace std;

bool checkPalindrome(string str, int s, int e)
{
    // base case
    if (s > e)
        return true;

    if (str[s] != str[e])
    {
        return false;
    }
    else
    {
        return checkPalindrome(str, s + 1, e - 1);
    }
}

int main()
{
    string str = "radar";
    cout << endl;

    bool isPalindrome = checkPalindrome(str, 0, str.length() - 1);

    if (isPalindrome)
    {
        cout << "Its is Palindrome" << endl;
    }
    else
    {
        cout << "Its not a Palindrome" << endl;
    }
}