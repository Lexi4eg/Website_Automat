import React from "react";
import axios from "axios";

export async function orderKitkat() {
  try {
    const res = await fetch("http://192.168.178.165:8080/Kitkat");

    if (!res.ok) {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
}

export async function orderBueno() {
  try {
    const res = await fetch("http://192.168.178.165:8080/Bueno");

    if (!res.ok) {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
}

export async function orderHaribo() {
  try {
    const res = await fetch("http://192.168.178.165:8080/Haribo");

    if (!res.ok) {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
}

export async function orderMM() {
  try {
    const res = await fetch("http://192.168.178.165:8080/MM");

    if (!res.ok) {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
}
