const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("../models/Book");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Connected to MongoDB for seeding");

    await Book.deleteMany(); // Remove existing data
    console.log("🧹 Existing books deleted");

    await Book.insertMany([
      {
        title: "The Whispering Shadows",
        author: "Ava Thompson",
        genre: "Fantasy",
        publishedYear: 1982,
      },
      {
        title: "Echoes of Eternity",
        author: "Liam Bennett",
        genre: "Science Fiction",
        publishedYear: 2001,
      },
      {
        title: "The Forgotten Garden",
        author: "Sophia Carter",
        genre: "Mystery",
        publishedYear: 1995,
      },
      {
        title: "Dreams of Steel",
        author: "Jackson Miller",
        genre: "Historical",
        publishedYear: 1979,
      },
      {
        title: "Chronicles of Dusk",
        author: "Emily Wilson",
        genre: "Thriller",
        publishedYear: 2008,
      },
      {
        title: "A Light in the Dark",
        author: "Lucas Anderson",
        genre: "Romance",
        publishedYear: 1992,
      },
      {
        title: "The Fire Within",
        author: "Isabella Moore",
        genre: "Adventure",
        publishedYear: 1989,
      },
      {
        title: "Shattered Worlds",
        author: "Ethan Taylor",
        genre: "Fantasy",
        publishedYear: 2011,
      },
      {
        title: "Beneath Crimson Skies",
        author: "Mia Thomas",
        genre: "Science Fiction",
        publishedYear: 1967,
      },
      {
        title: "Legacy of Thorns",
        author: "Noah Martin",
        genre: "Mystery",
        publishedYear: 1990,
      },

      {
        title: "The Alchemist's Secret",
        author: "Olivia White",
        genre: "Thriller",
        publishedYear: 1977,
      },
      {
        title: "Veil of Mist",
        author: "William Harris",
        genre: "Romance",
        publishedYear: 2006,
      },
      {
        title: "Cursed Kingdom",
        author: "Emma Clark",
        genre: "Fantasy",
        publishedYear: 1984,
      },
      {
        title: "The Icebound Heart",
        author: "James Lewis",
        genre: "Science Fiction",
        publishedYear: 2017,
      },
      {
        title: "Ashes and Embers",
        author: "Amelia Young",
        genre: "Historical",
        publishedYear: 1961,
      },
      {
        title: "The Clockwork Prince",
        author: "Benjamin Hall",
        genre: "Thriller",
        publishedYear: 1999,
      },
      {
        title: "Labyrinth of Souls",
        author: "Charlotte Allen",
        genre: "Mystery",
        publishedYear: 2013,
      },
      {
        title: "Tales of the North",
        author: "Elijah King",
        genre: "Adventure",
        publishedYear: 1975,
      },
      {
        title: "The Soulkeeper",
        author: "Abigail Wright",
        genre: "Romance",
        publishedYear: 1986,
      },
      {
        title: "Scarlet Moon",
        author: "Henry Scott",
        genre: "Fantasy",
        publishedYear: 2002,
      },

      {
        title: "The Forbidden Library",
        author: "Harper Green",
        genre: "Mystery",
        publishedYear: 2018,
      },
      {
        title: "Path of the Dragon",
        author: "Sebastian Baker",
        genre: "Historical",
        publishedYear: 1955,
      },
      {
        title: "Stormborn",
        author: "Chloe Adams",
        genre: "Fantasy",
        publishedYear: 1988,
      },
      {
        title: "The Lost Empire",
        author: "Daniel Nelson",
        genre: "Science Fiction",
        publishedYear: 1994,
      },
      {
        title: "Voices from the Deep",
        author: "Grace Hill",
        genre: "Thriller",
        publishedYear: 2003,
      },
      {
        title: "Garden of Stars",
        author: "Matthew Campbell",
        genre: "Romance",
        publishedYear: 1974,
      },
      {
        title: "The Bone Queen",
        author: "Zoe Mitchell",
        genre: "Adventure",
        publishedYear: 1963,
      },
      {
        title: "Winds of Vengeance",
        author: "David Turner",
        genre: "Fantasy",
        publishedYear: 2012,
      },
      {
        title: "The Shadow Prophet",
        author: "Lily Phillips",
        genre: "Mystery",
        publishedYear: 1996,
      },
      {
        title: "Harvest of Sorrow",
        author: "Andrew Parker",
        genre: "Historical",
        publishedYear: 1959,
      },

      {
        title: "The Time Weaver",
        author: "Ella Evans",
        genre: "Science Fiction",
        publishedYear: 1978,
      },
      {
        title: "Dagger's Edge",
        author: "Nathan Edwards",
        genre: "Thriller",
        publishedYear: 2007,
      },
      {
        title: "Blood and Silk",
        author: "Aria Collins",
        genre: "Romance",
        publishedYear: 1981,
      },
      {
        title: "The Painted Wolf",
        author: "Joseph Stewart",
        genre: "Fantasy",
        publishedYear: 1993,
      },
      {
        title: "The Black Citadel",
        author: "Scarlett Morris",
        genre: "Mystery",
        publishedYear: 1972,
      },
      {
        title: "The Last Oracle",
        author: "Gabriel Rogers",
        genre: "Historical",
        publishedYear: 2010,
      },
      {
        title: "The Winter Throne",
        author: "Penelope Cook",
        genre: "Adventure",
        publishedYear: 1960,
      },
      {
        title: "Serpent’s Mark",
        author: "Samuel Morgan",
        genre: "Thriller",
        publishedYear: 1985,
      },
      {
        title: "Mask of Deceit",
        author: "Victoria Reed",
        genre: "Fantasy",
        publishedYear: 2016,
      },
      {
        title: "The Sand Queen",
        author: "Owen Cox",
        genre: "Romance",
        publishedYear: 1969,
      },

      {
        title: "The Warden’s Pact",
        author: "Leah Bailey",
        genre: "Science Fiction",
        publishedYear: 2005,
      },
      {
        title: "Crimson Vow",
        author: "Julian Rivera",
        genre: "Mystery",
        publishedYear: 1998,
      },
      {
        title: "The Fading Light",
        author: "Aubrey Gray",
        genre: "Thriller",
        publishedYear: 1958,
      },
      {
        title: "Grimoire of Fate",
        author: "Christopher James",
        genre: "Fantasy",
        publishedYear: 1980,
      },
      {
        title: "The Hollow God",
        author: "Madeline Cooper",
        genre: "Adventure",
        publishedYear: 2015,
      },
      {
        title: "Iron and Ice",
        author: "Isaac Ward",
        genre: "Historical",
        publishedYear: 1991,
      },
      {
        title: "The Flame's Echo",
        author: "Nora Peterson",
        genre: "Science Fiction",
        publishedYear: 2020,
      },
      {
        title: "Kingdom of Ashes",
        author: "Caleb Hughes",
        genre: "Thriller",
        publishedYear: 1976,
      },
      {
        title: "Crown of Feathers",
        author: "Lucy Simmons",
        genre: "Fantasy",
        publishedYear: 2004,
      },
      {
        title: "Empire of Chains",
        author: "Aaron Foster",
        genre: "Mystery",
        publishedYear: 1965,
      },
    ]);

    console.log("✅ Books inserted successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    mongoose.disconnect();
  });
