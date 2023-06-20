import React from "react";
import axios from "axios";

export async function sendrequest() {
  try {
    const res = await fetch("http://192.168.178.165:8080/on");

    if (!res.ok) {
      console.log("Error");
    }
  } catch (e) {
    console.log(e);
  }
}
