// "use client";

// import { useEffect, useState } from "react";

// export default function CountryLookup() {
//   const [country, setCountry] = useState("United States");
//   useEffect(() => {
//     fetch(
//       `http://api.ipstack.com/access_key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
//     )
//       .then((res) => res.json())
//       .then((data) => setCountry(data.country));
//   }, []);
//   return <div>{country}</div>;
// }

// "use client"

// import { useEffect, useState } from "react";

// export default function CountryLookup() {
//   const [country, setCountry] = useState("United States");

//   useEffect(() => {
//     fetch("https://api.ipify.org?format=json")
//       .then((res) => res.json())
//       .then((data) => {
//         const ip = data.ip;
//         fetch(
//           `http://api.ipstack.com/${ip}?access_key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
//         )
//           .then((res) => res.json())
//           .then((data) => console.log(data))
//       });
//   }, []);

//   return <div>{country}</div>;
// }

// import { useEffect, useState } from "react";

// export default function CountryLookup() {
//   const [country, setCountry] = useState("United States");

//   useEffect(() => {
//     fetch("http://api.ipstack.com/134.201.250.155?output=json")
//       .then((res) => res.json())
//       .then((data) => {
//         const ip = data.ip;
//         fetch(
//           `http://api.ipstack.com/${ip}?access_key=52393034d77cabdbfbf400675954a6de`
//         )
//           .then((res) => res.json())
//           .then((data) => setCountry(data.country_name));
//       });
//   }, []);

//   return <div>{country}</div>;
// }

