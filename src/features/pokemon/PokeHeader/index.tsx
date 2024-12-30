import React from 'react'

export const PokeHeader = ({ title }: { title: string }) => {
  return (
    <header className="bg-blue-500 text-white text-center py-6">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
}
