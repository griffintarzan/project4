import React from "react";

const BanList = ({ banList, onUnban }) => {
  return (
    <div className="ban-list">
      <h3>Banned Breeds:</h3>
      {banList.length === 0 ? <p>No bans yet.</p> : (
        <ul>
          {banList.map((breed, index) => (
            <li key={index}>
              {breed}
              <button className="unban-btn" onClick={() => onUnban(breed)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BanList;