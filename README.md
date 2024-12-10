# Nivo Rocks Demo 

## Aggregation Notes

```
{
  _id: "$specialty",
  total: {
    $sum: 1
  },

  male: {
    $sum: {$cond: [ {$eq: ["$gender", "Male"]}, 1, 0]}
  },
  female: {
    $sum: {$cond: [ {$eq: ["$gender", "Female"]}, 1, 0]}
  },
  // other: {
  //   $sum: {$cond: [ {$not: { {$in: ["$gender", ["Male", "Female"]]}}, 1, 0]}
  // }
  
}
```
## Installing Nivo component modules 

```bash
 npm install @nivo/core @nivo/bar --registry http://npm.perseverenow.org/ppm/
```

## Nivo Docs 

https://nivo.rocks/bar/

https://codesandbox.io/p/sandbox/new-el3mg?file=%2Fsrc%2Findex.js

