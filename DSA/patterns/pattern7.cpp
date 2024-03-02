#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

    *
   ***
  *****
 *******
*********

*/

void pattern7(int n){
    for(int i = 1; i<=n; i++){
        // spaces
        for(int j = n; j > i; j--){
            cout << " ";
        }
        // stars
        for(int j = 1; j <= 2*i-1; j++){
            cout << "*";
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern7(n);

    return 0;
}