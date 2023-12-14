#include <bits/stdc++.h>
using namespace std;

// time = n^2
// space = 1
void insertionSort(vector<int> &arr,int i, int n){
  
  if(i == n) return;

  int j = i;
  while(j>0 && arr[j-1] > arr[j]){
    swap(arr[j-1], arr[j]);
    j--;
  }
  insertionSort(arr,i+1,n);
}


int main(){

  vector<int> arr = {5,4,3,2,1};

  for(auto i: arr) cout << i << " ";
  insertionSort(arr,0,arr.size());
  cout << endl;
  for(auto i: arr) cout << i << " ";
  
  return 0;
}