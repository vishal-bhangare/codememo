#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/

void pattern20(int n){
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j<=i; j++) {
            cout << "*";
        }
        for (int j = 2*(n-i); j>0; j--) {
            cout << " ";
        }
        for (int j = 1; j<=i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    for (int i = 1; i < n; i++) {
        for (int j = n; j>i; j--) {
            cout << "*";
        }
        for (int j = 1; j<=2*i; j++) {
            cout << " ";
        }
        for (int j = n; j>i; j--) {
            cout << "*";
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern20(n);

    return 0;
}