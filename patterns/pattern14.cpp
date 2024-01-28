#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

A
AB
ABC
ABCD
ABCDE

*/

void pattern14(int n){
    for(int i = 1; i <= n; i++) {
        char alpa = 'A';
        for(int j = 1; j <= i; j++) {
            cout << alpa++;
        }
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern14(n);

    return 0;
}