import React from 'react'
import { useParams } from "react-router-dom"

export  default function BookPage() {
  let { id } = useParams();
  return <h1>Book ID: {id}</h1>;
}