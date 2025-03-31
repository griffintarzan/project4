import React from "react";

const DogCard = ({ dog, onBan }) => {
  if (!dog || !dog.breeds) return <p>Loading...</p>;

  const breed = dog.breeds[0];

  return (
    <div className="card">
      <img src={dog.url} alt={breed.name} className="dog-image" />
      <p><strong><button className="ban-btn" onClick={() => onBan(breed.name)}>Breed name: {breed.name}</button></strong></p>
      <p><strong>Weight:</strong> {breed.weight.imperial} lbs ({breed.weight.metric} kg)</p>
      <p><strong>Height:</strong> {breed.height.imperial} in ({breed.height.metric} cm)</p>
      <p><strong>Life Span:</strong> {breed.life_span}</p>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      

      
    </div>
  );
};

export default DogCard;
