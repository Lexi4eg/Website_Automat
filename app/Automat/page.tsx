"use client";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { orderBueno, orderHaribo, orderKitkat, orderMM } from "./apires";

function Product({ props }: any) {
  return (
    <div className="  text-5xl flex-col items-center text-white flex justify-center p-5 ">
      <div className="flex p-4">{props.name}</div>
      <div className="flex flex-row ">
        <Image
          src={props.image}
          width={400}
          height={400}
          alt={""}
          className={"rounded-lg"}
        />
        <div className="flex flex-col text-2xl pl-4">
          <div className="flex p-4">Price: {props.price}€</div>
          <div className="flex p-4">Stock: {props.stock}</div>
          <div className="flex p-4">Description: {props.description}</div>
          <div className="flex p-4">Allergens: {props.allergens}</div>
          <Link
            className="text-2xl border px-4 py-2 rounded-lg bg-red-500 flex justify-center items-center hover:bg-red-700 "
            href={"/Automat/Thankorder"}
          >
            <button onClick={props.sendrequest} className="text-white text-3xl">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function page() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-2 m-3 grid-cols-2 w-screen h-screen gap-2 ">
        <div className="border  grid-cols-1 grid-rows-1 rounded-md">
          <Product
            props={{
              image: "/Kit.jpg",
              name: "Kitkat",
              price: 1.5,
              stock: 10,
              description: "Kitkats",
              allergens: "Nuts",
              sendrequest: orderKitkat,
            }}
          />
        </div>
        <div className="border shadow-md grid-cols-1 grid-rows-1 rounded-md">
          <Product
            props={{
              image: "/Haribo.jpg",
              name: "Haribo",
              price: 2,
              stock: 4,
              description: "Haribo",
              allergens: "Nuts",
              sendrequest: orderHaribo,
            }}
          />
        </div>
        <div className="border shadow-md grid-cols-1 grid-rows-1 rounded-md">
          <Product
            props={{
              image: "/M&M.jpg",
              name: "M&M",
              price: 2.2,
              stock: 2,
              description: "M&M",
              allergens: "Nuts",
              sendrequest: orderMM,
            }}
          />
        </div>
        <div className="border shadow-md grid-cols-1 grid-rows-1 rounded-md">
          <Product
            props={{
              image: "/Bueno.jpg",
              name: "Bueno ",
              price: 1.2,
              stock: 5,
              description: "Bueno ",
              allergens: "Nuts",
              sendrequest: orderBueno,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default page;
