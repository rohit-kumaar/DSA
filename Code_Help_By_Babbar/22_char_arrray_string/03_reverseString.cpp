#include <iostream>
using namespace std;

void reverseString(char name[], int length)
{
    int s = 0;
    int e = length - 1;

    while (e > s)
    {
        swap(name[s], name[e]);
        s++;
        e--;
    }
}

int getLength(char name[])
{
    int count = 0;

    for (int i = 0; name[i] != 0; i++)
    {
        cout << "name[i] : " << "i = " << i << " " << name[i] << endl;
        count++;
    }

    return count;
}

int main()
{
    char name[20];
    cout << "Enter the string : ";
    cin >> name;

    int length = getLength(name);
    cout << "String length is : " << length << endl;

    reverseString(name, length);
    cout << "Reverse string is : " << name;
    return 0;
}