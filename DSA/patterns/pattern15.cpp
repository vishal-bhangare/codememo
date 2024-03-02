#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

ABCDE
ABCD
ABC
AB
A

*/

void pattern15(int n){
    for(int i = 1; i <= n; i++) {
        char alpa = 'A';
        for(int j = n; j >= i; j--) {
            cout << alpa++;
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern15(n);

    return 0;
}