#include <bits/stdc++.h>
using namespace std;

// time = n^2
// space = 1
void bubbleSort(vector<int> &arr,int n){
  if(n == 1) return;
  for(int j = 0; j<n-1; j++){
    if(arr[j] > arr[j+1]){
      swap(arr[j], arr[j+1]);
    }
  }

  bubbleSort(arr,n-1);
}


int main(){

  vector<int> arr = {5,4,3,2,1};

  for(auto i: arr) cout << i << " ";
  bubbleSort(arr,arr.size());
  cout << endl;
  for(auto i: arr) cout << i << " ";
  
  return 0;
}