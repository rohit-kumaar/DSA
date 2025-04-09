#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v;
    cout << v.capacity() << endl;
    cout << v.size() << endl;
    v.push_back(1);
    cout << v.capacity() << endl;
    v.push_back(2);
    cout << v.capacity() << endl;
    v.push_back(3);
    cout << v.capacity() << endl;

    cout << "Print all array" << endl;
    for (int i : v)
    {
        cout << i << " ";
    }
    cout << endl;

    cout << "Before Pop" << endl;

    v.pop_back();
    for (int i : v)
    {
        cout << i << " ";
    }
    cout << endl;
}