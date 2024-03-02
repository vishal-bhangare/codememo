#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

A
BB
CCC
DDDD
EEEEE

*/

void pattern16(int n){
    char alpa = 'A';
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            cout << alpa;
        }
        alpa++;
        cout << endl;
    }
}

int main(){

    int n;
    cin >> n;
    pattern16(n);

    return 0;
}