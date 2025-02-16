"use client";

import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  const exampleInternships = [
    { id: 1, title: 'Marketing Intern', company: 'Spotify', location: 'Stockholm', link: '#' },
    { id: 2, title: 'Software Engineer Intern', company: 'Klarna', location: 'Remote', link: '#' },
    { id: 3, title: 'Finance Trainee', company: 'SEB', location: 'Göteborg', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#6AC6AC] text-white">
      <header className="flex items-center justify-between bg-[#6AC6AC] p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-[#6AC6AC] bg-white px-4 py-2 rounded-md">Internly</h1>
          <input
            type="text"
            placeholder="Sök jobb, yrken eller företag..."
            className="border p-2 rounded-md text-black w-96"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            placeholder="Plats"
            className="border p-2 rounded-md text-black w-40"
          />
          <button className="bg-white text-black px-4 py-2 rounded-md">Sök</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Senaste internshipannonser</h2>
          <button className="text-sm bg-gray-700 px-3 py-1 rounded-md">Bevaka jobb</button>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md text-black">
          {exampleInternships.length > 0 ? (
            exampleInternships
              .filter((internship) =>
                internship.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((internship) => (
                <div key={internship.id} className="p-4 border-b flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{internship.title}</h3>
                    <p>{internship.company} - {internship.location}</p>
                  </div>
                  <a href={internship.link} className="text-blue-500">Läs mer</a>
                </div>
              ))
          ) : (
            <p className="text-center text-gray-500">Inga annonser ännu.</p>
          )}
        </div>
      </main>
    </div>
  );
}
