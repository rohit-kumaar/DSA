#include <iostream>
using namespace std;

bool isPossible(int board[], int boardSize, int painter, int midVal)
{
    int numberOfPainter = 1;
    int timeTakenToPaintTheBoard = 0;

    for (int i = 0; i < boardSize; i++)
    {
        if (timeTakenToPaintTheBoard + board[i] <= midVal)
        {
            timeTakenToPaintTheBoard += board[i];
        }
        else
        {
            numberOfPainter++;
            if (numberOfPainter > painter || board[i] > midVal)
            {
                return false;
            }
            timeTakenToPaintTheBoard = board[i];
        }
    }
    return true;
}

int main()
{
    int board[] = {5, 5, 5, 5};
    int boardSize = 4;
    int painter = 2;

    int startVal = 0;
    int sum = 0;

    for (int i = 0; i < boardSize; i++)
    {
        sum += board[i];
    }

    int endVal = sum;
    int midVal = startVal + (endVal - startVal) / 2;
    int ans = -1;

    while (startVal <= endVal)
    {
        if (isPossible(board, boardSize, painter, midVal))
        {
            ans = midVal;
            endVal = midVal - 1;
        }
        else
        {
            startVal = midVal + 1;
        }

        midVal = startVal + (endVal - startVal) / 2;
    }

    cout << "Minimum Time Taken to Paint the Board is : " << ans;
}