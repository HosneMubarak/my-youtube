export const generateRandonName = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Ethan",
    "Fahim",
    "Gina",
    "Hassan",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const generateRandomMessage = () => {
  const messages = [
    "Hello!",
    "How are you?",
    "What's up?",
    "React is awesome!",
    "Let's build something cool.",
    "This is a random message.",
    "ChatGPT is helping me.",
    "Hope you're doing well!",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};
