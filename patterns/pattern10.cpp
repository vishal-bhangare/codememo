#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

*
**
***
****
*****
*****
****
***
**
*


*/

void pattern10(int n){
    for(int i = 0; i<n; i++){
        for(int j = 0; j<=i; j++){
            cout << "*";
        }
        cout << "\n";
    }
    for(int i = 1; i<=n; i++){
        for(int j = n; j >= i; j--){
            cout << "*";
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern10(n);

    return 0;
}