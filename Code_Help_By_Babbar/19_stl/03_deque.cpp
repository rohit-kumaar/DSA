#include <iostream>
#include <deque>
using namespace std;

int main()
{

    deque<int> d;

    d.push_back(1);
    d.push_front(2);

    cout << "Print all array" << endl;

    for (int i : d)
    {
        cout << i << " ";
    }
    cout << endl;

    cout << "Pop element from front" << endl;
    // d.pop_front();

    // for (int i : d)
    // {
    //     cout << i << " ";
    // }
    // cout << endl;

    cout << "Print first index element : " << d.at(1) << endl;

    cout << "Front : " << d.front() << endl;
    cout << "Back : " << d.back() << endl;

    cout << "Empty or not : " << d.empty() << endl;

    cout << "Before Erase : " << d.size() << endl;
    d.erase(d.begin(), d.begin() + 1);
    cout << "After Erase : " << d.size() << endl;

    for (int i : d)
    {
        cout << i << endl;
    }
}