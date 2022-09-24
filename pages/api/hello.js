// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    users: [
      {
        id: 1,
        lastName: "Kiss",
        firstName: "Andrea",
        age: 19,
        email: "joedoe@example.com",
        gender: false,
        desc: "Szeretek horgászva sörözni, szörfölni a színek tengerén...",
        city: "Sopron",
        profilePhoto:
          "https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?cs=srgb&dl=pexels-croft-alexander-1624229.jpg&fm=jpg",
      },
      {
        id: 2,
        lastName: "Jane",
        firstName: "Doe",
        age: 23,
        email: "janedoe@example.com",
        gender: false,
        desc: "A legkedvesebb ételem a kirántotthús",
        city: "Kőszeg",
        profilePhoto:
          "https://images.pexels.com/photos/8422522/pexels-photo-8422522.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8422522.jpg&fm=jpg",
      },
      {
        id: 3,
        lastName: "Nagy",
        firstName: "Géza",
        age: 40,
        email: "nagygeza@example.com",
        gender: true,
        desc: "A természet törvényei felett állok, futás közben pihenek",
        city: "Aszópuszta",
        profilePhoto:
          "https://images.pexels.com/photos/7561906/pexels-photo-7561906.jpeg?cs=srgb&dl=pexels-vazhnik-7561906.jpg&fm=jpg",
      },
      {
        id: 4,
        lastName: "Jakab",
        firstName: "Judit",
        age: 33,
        email: "example@example.com",
        gender: false,
        desc: "Megtaláltad akit keresel. Minden elvárásodnak megfelelek.",
        city: "Pornóapáti",
        profilePhoto:
          "https://images.pexels.com/photos/6163215/pexels-photo-6163215.jpeg?cs=srgb&dl=pexels-jasmin-chew-6163215.jpg&fm=jpg",
      },
    ],
  });
}
