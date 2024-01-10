const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
// Sample JSON data (Replace this with your actual data)
const jsonData = 
  // ... Your JSON data here ...
  {
    "labels": [
      {
        "id": "pork",
        "label": "Pork"
      },
      {
        "id": "seafood",
        "label": "Seafood"
      },
      {
        "id": "kids",
        "label": "Kids"
      },
      {
        "id": "chicken",
        "label": "Chicken"
      },
      {
        "id": "beef",
        "label": "Beef"
      },
      {
        "id": "vegetarian",
        "label": "Vegetarian"
      },
      {
        "id": "breakfast",
        "label": "Breakfast"
      }
    ],
    "meals": [
      {
        "id": "meal1",
        "title": "3 course chicken",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 9.99,
        "labels": [
          "chicken",
          "breakfast"
        ],
        "img": "https://source.unsplash.com/XaDsH-O2QXs",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "drink": "tyu",
          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp": "ttyy"
          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp": "tgg"
          }
        ]
      },
      {
        "id": "meal2",
        "title": "3 course Beef",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 19.99,
        "labels": [
          "beef"
        ],
        "img": "https://source.unsplash.com/auIbTAcSH6E",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "temp":"gg"
          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"g1g"

          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp":"g3g"

          }
        ]
      },
      {
        "id": "meal3",
        "title": "3 course Vegetarian",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 79.99,
        "labels": [
          "vegetarian"
        ],
        "img": "https://source.unsplash.com/EvoIiaIVRzU",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99 , 
            "temp": "mami"
          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"amogh"
          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp":"hello"
          }
        ]
      },
      {
        "id": "meal4",
        "title": "3 course Seafood",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 49.99,
        "labels": [
          "seafood"
        ],
        "img": "https://source.unsplash.com/awj7sRviVXo",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "temp":"gpg"

          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"jg"

          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp":"zg"

          }
        ]
      },
      {
        "id": "meal5",
        "title": "3 course Pork",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 39.99,
        "labels": [
          "pork"
        ],
        "img": "https://source.unsplash.com/XPvhzVIeETM",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "temp":"fghj"
          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"g5g"
            
          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp":"gui"

          }
        ]
      },
      {
        "id": "meal6",
        "title": "3 course Kids",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 29.99,
        "labels": [
          "kids",
          "breakfast"
        ],
        "img": "https://source.unsplash.com/PLyJqEJVre0",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "temp":"1gg"

          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"sa"
          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            temp:"ggh"
          }
        ]
      },
      {
        "id": "meal7",
        "title": "3 course Chicken 2",
        "starter": "Lorem Ipsum",
        "desert": "Cake",
        "price": 19.99,
        "labels": [
          "chicken"
        ],
        "img": "https://source.unsplash.com/N0u8bLrB_-g",
        "drinks": [
          {
            "id": "drink-1",
            "title": "Vine",
            "price": 4.99,
            "temp":"yui"
          },
          {
            "id": "drink-2",
            "title": "Juice",
            "price": 5.99,
            "temp":"ghk"
          },
          {
            "id": "drink-3",
            "title": "Beer",
            "price": 6.99,
            "temp":"ss"
          }
        ]
      }
    ]
  }
  

// Endpoint to serve the JSON data
app.get('/fetchdata', (req, res) => {
  res.json(jsonData);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
