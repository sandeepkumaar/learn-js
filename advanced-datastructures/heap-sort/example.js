
  function heapSort(arr) {
     // Build max heap
      function buildMaxHeap(arr) {
          let n = arr.length;
          // Start from the first non-leaf node (i.e., last parent node)
          for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
              heapify(arr, n, i);
          }
      }

      // To heapify a subtree rooted with node i which is an index in arr[]
      function heapify(arr, n, i) {
          let largest = i; // Initialize largest as root
          let left = 2 * i + 1; // left = 2*i + 1
          let right = 2 * i + 2; // right = 2*i + 2

          // If left child is larger than root
          if (left < n && arr[left] > arr[largest]) {
              largest = left;
          }

          // If right child is larger than largest so far
          if (right < n && arr[right] > arr[largest]) {
              largest = right;
          }

          // If largest is not root
          if (largest !== i) {
              [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
              // Recursively heapify the affected sub-tree
              heapify(arr, n, largest);
          }
      }

      // Perform heap sort
      function sort(arr) {
          let n = arr.length;

          // Build max heap (rearrange array)
          buildMaxHeap(arr);

          // One by one extract an element from heap
          for (let i = n - 1; i > 0; i--) {
              // Move current root to end (swap arr[0] with arr[i])
              [arr[0], arr[i]] = [arr[i], arr[0]];

              // call max heapify on the reduced heap
              heapify(arr, i, 0);
          }
      }

      // Perform heap sort on the input array
      sort(arr);
      return arr;
  }

  // Example usage:
  let array = [12, 11, 13, 5, 6, 7];
  console.log("Original Array:");
  console.log(array);

  // Perform heap sort
  heapSort(array);

  console.log("Sorted Array:");
  console.log(array);
