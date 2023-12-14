#include <bits/stdc++.h>
using namespace std;

// time = n^2
// space = 1
void linearSort(vector<int> &arr){
  int n = arr.size();
  for(int i = 0; i<n; i++){
    for(int j = i+1; j<n; j++){
      if(arr[i] > arr[j]){
        swap(arr[i],arr[j]);
      }
    }
  }
}


int main(){

  vector<int> arr = {2,3,4,1,5,0,6};

  for(auto i: arr) cout << i << " ";
  linearSort(arr);
  cout << endl;
  for(auto i: arr) cout << i << " ";

  return 0;
}