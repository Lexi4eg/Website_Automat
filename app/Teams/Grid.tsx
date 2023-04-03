import Image from "next/image";
import "./styles/Grid.css";

const Grid = () => {
  const items = [
    {
      id: 1,
      imageUrl: "/Prattes_Felix.jpg",
      name: "Felix Prattes",
      title: "CTO",
    },
    {
      id: 2,
      imageUrl: "/Lukic_Martina.jpg",
      name: "Martina Lukic",
      title: "Software Engineer",
    },
    {
      id: 3,
      imageUrl: "/Haag_Julia.jpg",
      name: "Julia Haag",
      title: "Software Engineer",
    },
    {
      id: 4,
      imageUrl: "/Sadikovic_Sanel.jpg",
      name: "Sanel Sadikovic",
      title: "Konstrukteur",
    },

    {
      id: 5,
      imageUrl: "/Hochleitner_Max.jpg",
      name: "Max Hochleitner",
      title: "Konstrukteur",
    },
    {
      id: 6,
      imageUrl: "/Aichhorn_Viktor.jpg",
      name: "Viktor Aichhorn",
      title: "additive manufacturing",
    },
    {
      id: 7,
      imageUrl: "/Kaiser_Silvio.jpg",
      name: "Silvio Kaiser",
      title: "additive manufacturing",
    },
  ];

  return (
    <div className="grid whitespace-nowrap overflow-auto scrollbar-hide  w-full grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-8 ">
      {items.map((item) => (
        <div key={item.id} className="group shadow-lg p-2 rounded-md">
          <div className="flex justify-center w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              className="rounded-lg"
              src={item.imageUrl}
              width={500}
              height={500}
              alt={""}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <p className="pl-4 text-3xl mt-4 text-white">{item.name}</p>
          <p className="pl-4 text-2xl mt-4 text-white">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
