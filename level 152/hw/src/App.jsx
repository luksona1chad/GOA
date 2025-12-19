import React, { useState } from "react";


function Card({ title, text, img }) {
  return (
    <div className="max-w-xl bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Lions() {
  return (
    <Card
      title="Lions"
      text="Lions are large carnivorous mammals known for strength and social structure."
      img="https://images.unsplash.com/photo-1546182990-dffeafbe841d"
    />
  );
}

function Goa() {
  return (
    <Card
      title="GOA Academy"
      text="A programming academy focused on modern web development skills."
      img="https://images.unsplash.com/photo-1518770660439-4636190af475"
    />
  );
}

function Adolf() {
  return (
    <Card
      title="Adolf Hitler"
      text="Historical figure of the 20th century. Content presented for educational context only."
      img="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea"
    />
  );
}

function Portfolio() {
  return (
    <Card
      title="My Portfolio"
      text="Junior Frontend Developer. React and Tailwind focused projects."
      img="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    />
  );
}

function Mussolini() {
  return (
    <Card
      title="Benito Mussolini"
      text="Historical figure of the 20th century. Content presented for educational context only."
      img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    />
  );
}
