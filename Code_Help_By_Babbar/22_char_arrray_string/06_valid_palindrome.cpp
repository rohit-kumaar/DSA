#include <iostream>
#include <vector>
using namespace std;

bool valid(char s)
{
    return ((s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z') || (s >= '0' && s <= '9'));
}

char toLowerCase(char s)
{

    if (s >= 'A' && s <= 'Z')
    {
        return s - 'A' + 'a';
    }

    return s;
}

bool checkPalindrome(string temp)
{
    int s = 0;
    int e = temp.length() - 1;

    while (e > s)
    {
        if (temp[s] != temp[e])
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

bool isPalindrome(string s)
{
    // removing all non-alphanumeric characters
    string temp = "";
    int size = s.length();
    for (int i = 0; i < size; i++)
    {
        if (valid(s[i]))
        {
            temp.push_back(toLowerCase(s[i]));
        }
    }

    return checkPalindrome(temp);
}

int main()
{
    string s = "A man, a plan, a canal: Panama";

    bool palindromeString = isPalindrome(s);

    cout << "Palindrome string is : " << (palindromeString ? "Its a palindrome" : "Not a palindrome") << endl;

    return 0;
}