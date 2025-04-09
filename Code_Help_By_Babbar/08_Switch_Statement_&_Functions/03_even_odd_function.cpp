
#include <iostream>
using namespace std;

int isEven(int a)
{
    if (a & 1)
    {
        return 0;
    }

    return 1;
}

int main()
{

    int num;
    cout << "Enter the Number : ";
    cin >> num;

    if (isEven(num))
    {
        cout << "Number is Even" << endl;
    }
    else
    {
        cout << "Number is Odd" << endl;
    }
}