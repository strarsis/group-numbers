# group-numbers
Partitions an array of numbers into continuous groups.

Usage
-----
````
npm install group-numbers
````
````
   [   43, 44, 45, 46,   51,   53, 54  ].numberRange();
=> [ [ 43, 44, 45, 46 ], 51, [ 53, 54] ]
````

For having single elements in array, too:
````
   [   43, 44, 45, 46,     51,     53, 54  ].numberRange(false);
=> [ [ 43, 44, 45, 46 ], [ 51 ], [ 53, 54] ]
````


Arguments
---------
### numbers
The array of numbers to be grouped.

### returnSingleElements
Whether to return single elements in the array as single elements or in an array (of a single element). Defaults to true.
(Passed to underlying arr-group method)


Note
----
The numbers in the passed array are sorted naturally first in order for grouping to work properly.
