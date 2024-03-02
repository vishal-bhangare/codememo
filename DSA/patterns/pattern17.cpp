#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA

*/

void pattern17(int n){
    char ch;
    for (int i = 1; i <= n; i++) {
        ch = 'A';
        for (int j = n; j > i; j--) {
            cout << " ";
        }
        for (int j = 1; j <= i; j++) {
            cout << ch++;
        }
        --ch;
        for (int j = 1; j < i; j++) {
            cout << --ch;
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern17(n);

    return 0;
}