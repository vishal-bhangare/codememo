#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

1
12
123
1234
12345

*/

void pattern3(int n){
    for(int i = 1; i<=n; i++){
        for(int j = 1; j<=i; j++){
            cout << j;
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern3(n);

    return 0;
}