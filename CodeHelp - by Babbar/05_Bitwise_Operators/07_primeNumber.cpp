#include <iostream>
using namespace std;

int main()
{
    int num;
    cout << "Enter the number : ";
    cin >> num;

    bool isPrime = true;

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            isPrime = false;
            break;
        }
    }

    if (isPrime == false)
    {
        cout << "The given number " << num << " is NOT prime number" << endl;
    }
    else
    {
        cout << "The given number " << num << " is prime number" << endl;
    }
}
