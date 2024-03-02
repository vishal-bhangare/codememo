#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

12345
1234
123
12
1

*/

void pattern6(int n){
    for(int i = 1; i<=n; i++){
        for(int j = n; j>=i; j--){
            cout << n-j+1;
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern6(n);

    return 0;
}