#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

E
DE
CDE
BCDE
ABCDE

*/

void pattern18(int n){
    for(int i = 1; i <= n; i++) {
        int ch = 65 + n - 1;
        for(int j = i - 1; j >= 0; j--) {
            int result = ch - j;
            cout << char(result);
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern18(n);

    return 0;
}