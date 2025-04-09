
#include <iostream>
using namespace std;

int main()
{

    int a, b;

    cout << "Enter the value of a : ";
    cin >> a;

    cout << "Enter the value of b : ";
    cin >> b;

    char op;
    cout << "Enter the operation you want to perform" << endl;
    cin >> op;

    switch (op)
    {

    case '+':
        cout << "Addition is : " << (a + b) << endl;
        break;

    case '-':
        cout << "Subtraction is : " << (a - b) << endl;
        break;

    case '/':
        cout << "Division is : " << (a / b) << endl;
        break;

    case '*':
        cout << "Multiplication is : " << (a * b) << endl;
        break;

    case '%':
        cout << "Reminder is : " << (a % b) << endl;
        break;

    default:
        cout << "Please Add Operation You Want To Perform!";
        break;
    }
}