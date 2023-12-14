
#include <bits/stdc++.h>
using namespace std;

// time = n^2
// space = 1
void selectionSort(vector<int> &arr){
  int n = arr.size();
  for(int i = 0; i<n-1; i++){
    int mini = i;
    for(int j = i+1; j<n; j++){
      if(arr[j] < arr[mini]){
        mini = j;
      }
    }
    swap(arr[mini], arr[i]);
  }
}


int main(){

  vector<int> arr = {5,4,3,2,1};

  for(auto i: arr) cout << i << " ";
  selectionSort(arr);
  cout << endl;
  for(auto i: arr) cout << i << " ";
  
  return 0;
}