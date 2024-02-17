import React from "react";
import { ListItem, Navbar } from "../../components/components";

function Homepage() {
  const listMovie = [
    {
      title: "Rick and Morty",
      thumbnail:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10376284_b_v13_aa.jpg",
    },
    {
      title: "Wonka",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxIIdO1V_9YiTN4wJaWKBXmDw-S9sOJq-oe6QYHpTIH8J-KaNr-0HZxJFkOwz3JTaBV8&usqp=CAU",
    },
    {
      title: "Rick and Morty",
      thumbnail:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10376284_b_v13_aa.jpg",
    },
    {
      title: "Wonka",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxIIdO1V_9YiTN4wJaWKBXmDw-S9sOJq-oe6QYHpTIH8J-KaNr-0HZxJFkOwz3JTaBV8&usqp=CAU",
    },
    {
      title: "Rick and Morty",
      thumbnail:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10376284_b_v13_aa.jpg",
    },
    {
      title: "Wonka",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxIIdO1V_9YiTN4wJaWKBXmDw-S9sOJq-oe6QYHpTIH8J-KaNr-0HZxJFkOwz3JTaBV8&usqp=CAU",
    },
  ];

  return (
    <div className=" bg-black min-h-screen bg-opacity-90 text-white">
      {/* Navbar Section */}
      <Navbar />
      {/* Trending Movies Section */}
      <ListItem listMovie={listMovie} />
    </div>
  );
}

export default Homepage;
