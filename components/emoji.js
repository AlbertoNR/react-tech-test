import React from "react";

const Emoji = ({ type }) => {
  const emojiLiteral = {
    "Fire": "🔥",
    "Water": "🌊",
    "Grass": "🍃",
    "Electric": "⚡️",
    "Rock": "⛰",
    "Ground": "🌋",
    "Fighting": " 👊",
    "Psychic": "👁",
    "Dark": "🌙",
    "Ice": "🧊",
    "Dragon": "🐉",
    "Steel": "🔧",
    "Flying": "☁️",
    "Ghost": "👻",
    "Poison": "💀",
    "Bug": "🐞",
    "Normal": "😀"
  };

  return (
    <span title={type} className="emoji">
      {emojiLiteral[type]}
    </span>
  );
};

export default Emoji;
