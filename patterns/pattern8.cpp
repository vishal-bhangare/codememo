#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

*********
 *******
  *****
   ***
    *

*/

void pattern8(int n){
    for(int i = 1; i<=n; i++){
        // spaces
        for(int j = 1; j < i; j++){
            cout << " ";
        }
        // stars
        for(int j = 2*(n - i)+1; j>0; j--){
            cout << "*";
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern8(n);

    return 0;
}