import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "my house",
    description: "its my place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",
    address: "163 North Shore Road, Hampton, NH 03842",
    location: {
      lat: 42.9465818,
      lng: -70.795169,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "my house",
    description: "its my place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",
    address: "163 North Shore Road, Hampton, NH 03842",
    location: {
      lat: 42.9465818,
      lng: -70.795169,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
