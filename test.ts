import { stringify } from "./csve.ts";

const testObj = [
  {
    _id: "626e2adaab9c21b5391c31af",
    index: 0,
    guid: "8ad6616e-23b3-46f1-98e4-84e9e0332ed4",
    isActive: false,
    balance: "$2,328.02",
    picture: "http://placehold.it/32x32",
    age: 29,
    eyeColor: "green",
    name: "Dana Cook",
    gender: "female",
    company: "REPETWIRE",
    email: "danacook@repetwire.com",
    phone: "+1 (912) 494-3359",
    address: "465 Fayette Street, Bakersville, Idaho, 4202",
    about:
      "Elit aliqua do aliqua ut adipisicing sunt ipsum eiusmod culpa qui eiusmod sint. Cupidatat nulla nostrud velit reprehenderit irure. Cupidatat culpa amet et minim ullamco sunt nostrud. Irure est dolor consectetur sit ut. Fugiat tempor fugiat sint laboris proident est aute minim tempor voluptate nulla reprehenderit consectetur. ",
    registered: "2016-06-18T05:50:20 -03:00",
    latitude: 46.033437,
    longitude: 33.577571,
    tags: ["dolor", "ea", "tempor", "non", "duis", "proident", "qui"],
    friends: [
      {
        id: 0,
        name: "Sexton Rivers",
      },
      {
        id: 1,
        name: "Elinor Cote",
      },
      {
        id: 2,
        name: "Ellis Matthews",
      },
    ],
    greeting: "Hello, Dana Cook! You have 9 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "626e2ada0b966963539be142",
    index: 1,
    guid: "3296753d-c714-44a4-80b5-11659d48a9e4",
    isActive: false,
    balance: "$1,038.71",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "blue",
    name: "Beatrice Sloan",
    gender: "female",
    company: "NETERIA",
    email: "beatricesloan@neteria.com",
    phone: "+1 (890) 514-3314",
    address: "644 Prince Street, Edenburg, Illinois, 8083",
    about:
      "Nostrud consequat aliqua do veniam adipisicing laboris ea laborum dolore in consequat officia et. Esse quis nulla sint deserunt occaecat ipsum deserunt veniam ea sunt commodo. Sunt irure sint elit enim eu nostrud eu cillum enim qui magna enim. Sint esse proident laboris proident aliqua cupidatat nisi minim officia.",
    registered: "2019-06-26T11:47:39 -03:00",
    latitude: -61.668165,
    longitude: 14.863945,
    tags: ["nisi", "cupidatat", "minim", "ut", "cillum", "amet", "et"],
    friends: [
      {
        id: 0,
        name: "Paige Boyer",
      },
      {
        id: 1,
        name: "Barbra Carpenter",
      },
      {
        id: 2,
        name: "Jacqueline Beach",
      },
    ],
    greeting: "Hello, Beatrice Sloan! You have 8 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "626e2ada01a37797261f7ccb",
    index: 2,
    guid: "31bdd26c-93eb-47f0-a67e-e969e5f7cffc",
    isActive: true,
    balance: "$3,783.93",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Annette Blanchard",
    gender: "female",
    company: "XURBAN",
    email: "annetteblanchard@xurban.com",
    phone: "+1 (931) 586-3481",
    address: "521 Farragut Road, Brandywine, Arizona, 7329",
    about:
      "Velit nostrud excepteur dolore mollit do ea ullamco enim ad nisi amet eiusmod. Id consequat tempor irure aute. Sunt eu consectetur cillum proident nulla officia veniam laboris laborum exercitation aliquip nulla in. Reprehenderit est adipisicing sunt nulla ullamco.",
    registered: "2018-04-02T05:46:01 -03:00",
    latitude: -19.417648,
    longitude: -56.192248,
    tags: [
      "ut",
      "culpa",
      "consectetur",
      "ipsum",
      "voluptate",
      "eiusmod",
      "non",
    ],
    friends: [
      {
        id: 0,
        name: "Long Pittman",
      },
      {
        id: 1,
        name: "Cora Powers",
      },
      {
        id: 2,
        name: "White Becker",
      },
    ],
    greeting: "Hello, Annette Blanchard! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "626e2adab6bee7ef8f08f20d",
    index: 3,
    guid: "c67fc725-8374-482c-a240-b47bfb0cbab5",
    isActive: true,
    balance: "$1,601.10",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "brown",
    name: "Harriett Hinton",
    gender: "female",
    company: "CHILLIUM",
    email: "harrietthinton@chillium.com",
    phone: "+1 (996) 432-2335",
    address: "309 Macdougal Street, Buxton, District Of Columbia, 9302",
    about:
      "Elit sit consectetur ad minim esse et proident nisi enim occaecat dolore. Culpa labore officia sunt sunt nulla pariatur. Ad ex eu non laboris. Est consectetur tempor anim et exercitation reprehenderit exercitation consequat ea labore sit exercitation pariatur pariatur. Minim consequat deserunt et ad cillum velit ut tempor officia. Amet sit consectetur veniam occaecat deserunt excepteur. Incididunt officia eiusmod labore proident ipsum dolor.",
    registered: "2018-02-18T02:24:56 -02:00",
    latitude: 23.074135,
    longitude: -84.540757,
    tags: ["ea", "duis", "dolore", "aliqua", "et", "ex", "aute"],
    friends: [
      {
        id: 0,
        name: "Lessie Mcfarland",
      },
      {
        id: 1,
        name: "Mcconnell Emerson",
      },
      {
        id: 2,
        name: "Stevenson Elliott",
      },
    ],
    greeting: "Hello, Harriett Hinton! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "626e2ada6abf25fa871867f3",
    index: 4,
    guid: "211239a7-10a8-4e7d-af04-a72dbe23a65a",
    isActive: true,
    balance: "$1,908.28",
    picture: "http://placehold.it/32x32",
    age: 20,
    eyeColor: "green",
    name: "Sonia Ferrell",
    gender: "female",
    company: "OBLIQ",
    email: "soniaferrell@obliq.com",
    phone: "+1 (968) 489-3329",
    address: "697 Alice Court, Riverton, Delaware, 8774",
    about:
      "Nisi ut fugiat mollit ad. Veniam ex laborum nisi commodo aliqua sit. Mollit excepteur non adipisicing ad irure laboris tempor in anim. Eu incididunt esse duis cillum sint incididunt anim consectetur irure irure. Laborum ea nostrud excepteur culpa sit. Excepteur ipsum commodo nulla laboris qui pariatur ad veniam sint.",
    registered: "2014-02-17T06:07:22 -02:00",
    latitude: 60.617495,
    longitude: -169.333057,
    tags: ["esse", "do", "aute", "consequat", "aliquip", "eiusmod", "magna"],
    friends: [
      {
        id: 0,
        name: "Glenn Little",
      },
      {
        id: 1,
        name: "Darlene Stevens",
      },
      {
        id: 2,
        name: "Mavis Mcmahon",
      },
    ],
    greeting: "Hello, Sonia Ferrell! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "626e2adae275f0a7d36fb887",
    index: 5,
    guid: "525fc19c-82e8-43c6-840f-7ceed2d5af83",
    isActive: true,
    balance: "$3,687.78",
    picture: "http://placehold.it/32x32",
    age: 33,
    eyeColor: "green",
    name: "Sandra Dalton",
    gender: "female",
    company: "NORSUL",
    email: "sandradalton@norsul.com",
    phone: "+1 (870) 586-2267",
    address: "140 Vermont Court, Townsend, Maine, 4276",
    about:
      "Sint fugiat aute laborum ad voluptate enim irure et officia tempor. Ullamco esse ipsum sit irure sit voluptate dolor. Aute sit est aliqua excepteur adipisicing id eiusmod laborum officia ut. Eiusmod dolor ullamco deserunt exercitation qui dolor labore laboris labore cillum ea do anim ut. Anim consequat in laboris ad do reprehenderit.",
    registered: "2018-07-16T10:03:16 -03:00",
    latitude: 81.344955,
    longitude: 5.949611,
    tags: ["pariatur", "qui", "veniam", "ad", "exercitation", "eu", "aute"],
    friends: [
      {
        id: 0,
        name: "Steele Hewitt",
      },
      {
        id: 1,
        name: "Lavonne Leach",
      },
      {
        id: 2,
        name: "Sasha Pollard",
      },
    ],
    greeting: "Hello, Sandra Dalton! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
];

const testObj2 = [{ ceva: "da" }, { ceva2: "da2" }];

const testCsv = stringify(testObj);

const testCsv2 = stringify(testObj2);

console.log(testCsv);
console.log(testCsv2);
