# csv-extended

### my attempt at making csv better 

this repository just serves as a proof of concept

json example: 
```json
[
  {"name": "x", "price": 12.10, "items": ["a", "b", "c", "d"]},
  {"name": "y", "price": 13.10, "color": "red"},
  {"name": "z", "price": 14.10, "items": ["e", "f", "g", "h"], "color": "blue"},
]
```

csv-extended example:
```csv
name, price, items, color
"x", 12.10, #1, 
"y", 13.10, , "red"
"z", 14.10, #1, "blue"
$1
"a", "b", "c", "d"
"e", "f", "g", "h"
```