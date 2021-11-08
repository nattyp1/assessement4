const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment"), (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
};

app.get('/api/fortune'), (req,res) => {
  const fortune = ['A friend is a present you give yourself.',
          'A smile is your personal welcome mat.', 'A truly rich life contains love and art in abundance.',
         'All your hard work will soon pay off.', 'It is better to deal with problems before they arise.', 
];
let randomIndex2 = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex2]
 
res.status(200).send(randomFortune)
};

app.listen(4000,() => console.log("Server running on 4000"));
