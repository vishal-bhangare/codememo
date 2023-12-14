
#include <bits/stdc++.h>
using namespace std;

// time = n^2
// space = 1
void insertionSort(vector<int> &arr){
  int n = arr.size();
  for(int i = 0; i<n; i++){
    int j = i;
    while(j>0 && arr[j-1] > arr[j]){
      swap(arr[j-1], arr[j]);
      j--;
    }
  }
}


int main(){

  vector<int> arr = {5,4,3,2,1};

  for(auto i: arr) cout << i << " ";
  insertionSort(arr);
  cout << endl;
  for(auto i: arr) cout << i << " ";
  
  return 0;
}