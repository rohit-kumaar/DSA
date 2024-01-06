#include <iostream>
using namespace std;

int main()
{
    for (int i = 0; i < 5; i++)
    {
        cout << "1st : " << i << endl;
        cout << "2nd : " << i << endl;
        continue;
        cout << "Last : " << i << endl;
    }
}