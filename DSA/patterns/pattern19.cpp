#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

*/

void pattern19(int n){
    // Upper half
    for (int i = 1; i <= n; i++) {
        // stars
        for (int j = n; j >= i; j--) {
            cout << "*";
        }
        // spaces
        for (int j = 1; j < 2*i-1; j++) {
            cout << " ";
        }
        // stars
        for (int j = n; j >= i; j--) {
            cout << "*";
        }
        cout << endl;
    }

    // Lower half
    for (int i = 1; i <= n; i++) {
        // stars
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        // spaces
        for (int j = 2*(n-i)-1; j >= 0; j--) {
            cout << " ";
        }
        // stars
        for (int j = 1; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern19(n);

    return 0;
}