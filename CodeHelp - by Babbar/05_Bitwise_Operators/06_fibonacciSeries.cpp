#include <iostream>
using namespace std;

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    int a = 0;
    int b = 1;
    cout << a << " " << b << " ";

    for (int i = 2; i < num; i++)
    {
        int fib = a + b;
        cout << fib << " ";
        a = b;
        b = fib;
    }
}