#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

1
22
333
4444
55555

*/

void pattern4(int n){
    for(int i = 1; i<=n; i++){
        for(int j = 1; j<=i; j++){
            cout << i;
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern4(n);

    return 0;
}