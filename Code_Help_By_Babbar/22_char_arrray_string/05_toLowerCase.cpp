#include <iostream>
using namespace std;

char toLowerCase(char ch)
{
    if (ch >= 'a' && ch <= 'z')
    {
        return ch;
    }
    else
    {
        char temp = ch - 'A' + 'a';
        return temp;
    }
}

int main()
{
    char ch = 'R';
    cout << "The Character is : " << toLowerCase(ch);

    return 0;
}