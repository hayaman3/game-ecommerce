"use client";
import React, { FunctionComponent, useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
// import extractedData from "@/_data/gamesData";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const queryClient = new QueryClient();

const Test: FunctionComponent = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </>
  );
};

const Page: FunctionComponent = () => {
  // const { isLoading, error, data } = useQuery('data', fetchTodos);

  const { data } = useQuery({
    // queryKey: ["rawgAPI"],
    queryKey: ["asd"],
    // https://api.rawg.io/api/games

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/api/page_two");
      console.log(data);
      return data as Data;
    },
  });

  // useEffect(() => {
  //   console.log(extractedData);
  // }, []);

  return (
    <main className="mt-[100px] w-[300px] p-20">
      <div>{JSON.stringify(data)}</div>
    </main>
  );
};

export default Test;

const datas = {
  count: 10,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      name: "Steam",
      domain: "store.steampowered.com",
      slug: "steam",
      games_count: 90466,
      image_background:
        "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      games: [
        {
          id: 3498,
          slug: "grand-theft-auto-v",
          name: "Grand Theft Auto V",
          added: 20612,
        },
        {
          id: 3328,
          slug: "the-witcher-3-wild-hunt",
          name: "The Witcher 3: Wild Hunt",
          added: 19884,
        },
        { id: 4200, slug: "portal-2", name: "Portal 2", added: 18763 },
        {
          id: 4291,
          slug: "counter-strike-global-offensive",
          name: "Counter-Strike: Global Offensive",
          added: 16329,
        },
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        { id: 13536, slug: "portal", name: "Portal", added: 15959 },
      ],
    },
    {
      id: 3,
      name: "PlayStation Store",
      domain: "store.playstation.com",
      slug: "playstation-store",
      games_count: 7911,
      image_background:
        "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      games: [
        {
          id: 3498,
          slug: "grand-theft-auto-v",
          name: "Grand Theft Auto V",
          added: 20612,
        },
        {
          id: 3328,
          slug: "the-witcher-3-wild-hunt",
          name: "The Witcher 3: Wild Hunt",
          added: 19884,
        },
        { id: 4200, slug: "portal-2", name: "Portal 2", added: 18763 },
        {
          id: 4291,
          slug: "counter-strike-global-offensive",
          name: "Counter-Strike: Global Offensive",
          added: 16329,
        },
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        {
          id: 5679,
          slug: "the-elder-scrolls-v-skyrim",
          name: "The Elder Scrolls V: Skyrim",
          added: 15512,
        },
      ],
    },
    {
      id: 2,
      name: "Xbox Store",
      domain: "microsoft.com",
      slug: "xbox-store",
      games_count: 4828,
      image_background:
        "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
      games: [
        {
          id: 3498,
          slug: "grand-theft-auto-v",
          name: "Grand Theft Auto V",
          added: 20612,
        },
        {
          id: 3328,
          slug: "the-witcher-3-wild-hunt",
          name: "The Witcher 3: Wild Hunt",
          added: 19884,
        },
        { id: 4200, slug: "portal-2", name: "Portal 2", added: 18763 },
        {
          id: 28,
          slug: "red-dead-redemption-2",
          name: "Red Dead Redemption 2",
          added: 15075,
        },
        {
          id: 4062,
          slug: "bioshock-infinite",
          name: "BioShock Infinite",
          added: 14967,
        },
        {
          id: 3439,
          slug: "life-is-strange-episode-1-2",
          name: "Life is Strange",
          added: 14747,
        },
      ],
    },
    {
      id: 4,
      name: "App Store",
      domain: "apps.apple.com",
      slug: "apple-appstore",
      games_count: 75448,
      image_background:
        "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
      games: [
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        {
          id: 4062,
          slug: "bioshock-infinite",
          name: "BioShock Infinite",
          added: 14967,
        },
        {
          id: 3439,
          slug: "life-is-strange-episode-1-2",
          name: "Life is Strange",
          added: 14747,
        },
        { id: 802, slug: "borderlands-2", name: "Borderlands 2", added: 14735 },
        { id: 4286, slug: "bioshock", name: "BioShock", added: 13538 },
        { id: 1030, slug: "limbo", name: "Limbo", added: 13155 },
      ],
    },
    {
      id: 5,
      name: "GOG",
      domain: "gog.com",
      slug: "gog",
      games_count: 5899,
      image_background:
        "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
      games: [
        {
          id: 3328,
          slug: "the-witcher-3-wild-hunt",
          name: "The Witcher 3: Wild Hunt",
          added: 19884,
        },
        {
          id: 3439,
          slug: "life-is-strange-episode-1-2",
          name: "Life is Strange",
          added: 14747,
        },
        {
          id: 58175,
          slug: "god-of-war-2",
          name: "God of War (2018)",
          added: 13179,
        },
        { id: 1030, slug: "limbo", name: "Limbo", added: 13155 },
        {
          id: 41494,
          slug: "cyberpunk-2077",
          name: "Cyberpunk 2077",
          added: 12332,
        },
        { id: 422, slug: "terraria", name: "Terraria", added: 12117 },
      ],
    },
    {
      id: 6,
      name: "Nintendo Store",
      domain: "nintendo.com",
      slug: "nintendo",
      games_count: 8990,
      image_background:
        "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
      games: [
        {
          id: 3328,
          slug: "the-witcher-3-wild-hunt",
          name: "The Witcher 3: Wild Hunt",
          added: 19884,
        },
        {
          id: 5679,
          slug: "the-elder-scrolls-v-skyrim",
          name: "The Elder Scrolls V: Skyrim",
          added: 15512,
        },
        {
          id: 4062,
          slug: "bioshock-infinite",
          name: "BioShock Infinite",
          added: 14967,
        },
        { id: 1030, slug: "limbo", name: "Limbo", added: 13155 },
        { id: 2454, slug: "doom", name: "DOOM (2016)", added: 12969 },
        { id: 3939, slug: "payday-2", name: "PAYDAY 2", added: 12840 },
      ],
    },
    {
      id: 7,
      name: "Xbox 360 Store",
      domain: "marketplace.xbox.com",
      slug: "xbox360",
      games_count: 1912,
      image_background:
        "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      games: [
        {
          id: 3498,
          slug: "grand-theft-auto-v",
          name: "Grand Theft Auto V",
          added: 20612,
        },
        { id: 4200, slug: "portal-2", name: "Portal 2", added: 18763 },
        {
          id: 4291,
          slug: "counter-strike-global-offensive",
          name: "Counter-Strike: Global Offensive",
          added: 16329,
        },
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        {
          id: 12020,
          slug: "left-4-dead-2",
          name: "Left 4 Dead 2",
          added: 15824,
        },
        {
          id: 5679,
          slug: "the-elder-scrolls-v-skyrim",
          name: "The Elder Scrolls V: Skyrim",
          added: 15512,
        },
      ],
    },
    {
      id: 8,
      name: "Google Play",
      domain: "play.google.com",
      slug: "google-play",
      games_count: 17087,
      image_background:
        "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      games: [
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        { id: 13536, slug: "portal", name: "Portal", added: 15959 },
        {
          id: 3439,
          slug: "life-is-strange-episode-1-2",
          name: "Life is Strange",
          added: 14747,
        },
        { id: 802, slug: "borderlands-2", name: "Borderlands 2", added: 14735 },
        { id: 13537, slug: "half-life-2", name: "Half-Life 2", added: 14200 },
        { id: 1030, slug: "limbo", name: "Limbo", added: 13155 },
      ],
    },
    {
      id: 9,
      name: "itch.io",
      domain: "itch.io",
      slug: "itch",
      games_count: 654147,
      image_background:
        "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
      games: [
        { id: 613, slug: "bastion", name: "Bastion", added: 8306 },
        { id: 5525, slug: "brutal-legend", name: "Brutal Legend", added: 7958 },
        { id: 1010, slug: "transistor", name: "Transistor", added: 7477 },
        { id: 356714, slug: "among-us", name: "Among Us", added: 6973 },
        { id: 3740, slug: "fez", name: "FEZ", added: 6699 },
        {
          id: 1358,
          slug: "papers-please",
          name: "Papers, Please",
          added: 6655,
        },
      ],
    },
    {
      id: 11,
      name: "Epic Games",
      domain: "epicgames.com",
      slug: "epic-games",
      games_count: 1324,
      image_background:
        "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      games: [
        {
          id: 3498,
          slug: "grand-theft-auto-v",
          name: "Grand Theft Auto V",
          added: 20612,
        },
        {
          id: 5286,
          slug: "tomb-raider",
          name: "Tomb Raider (2013)",
          added: 16258,
        },
        {
          id: 28,
          slug: "red-dead-redemption-2",
          name: "Red Dead Redemption 2",
          added: 15075,
        },
        {
          id: 4062,
          slug: "bioshock-infinite",
          name: "BioShock Infinite",
          added: 14967,
        },
        { id: 32, slug: "destiny-2", name: "Destiny 2", added: 13191 },
        {
          id: 58175,
          slug: "god-of-war-2",
          name: "God of War (2018)",
          added: 13179,
        },
      ],
    },
  ],
};
