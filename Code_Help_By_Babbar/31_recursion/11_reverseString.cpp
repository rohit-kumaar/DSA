#include <iostream>
using namespace std;

void reverseString(string &str, int s, int e)
{
    cout << "Call received for : " << str << endl;

    // base case
    if (s > e)
        return;

    swap(str[s++], str[e--]);

    // Recursive call
    reverseString(str, s, e);
}

int main()
{
    string str = "abcde";
    cout << endl;
    reverseString(str, 0, str.length() - 1);
    cout << endl;

    cout << str << endl;
    return 0;
}