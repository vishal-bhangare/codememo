#include<bits/stdc++.h>
using namespace std;

/*
pattern -> 

1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 

*/

void pattern11(int n){
    int ch = 1;
    for(int i = 0; i<n; i++){
        int ch = 1;
        if(i%2!=0) ch = 0;
            else ch = 1;
        for(int j = 0; j<=i; j++){
            cout << ch << " ";
            if(ch==1) ch = 0;
            else ch = 1;
        }
        cout << "\n";
    }
}

int main(){

    int n;
    cin >> n;
    pattern11(n);

    return 0;
}