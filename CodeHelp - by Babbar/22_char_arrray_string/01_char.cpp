#include <iostream>
using namespace std;

int main()
{
    char name[20];
    cout << "Enter the your name : " << endl;
    // cin didn't print the "space", "Tab" Or "Enter" character
    cin >> name;

    cout << "Your name is : " << name;

    return 0;
}