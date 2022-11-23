interface User {
  id: string;
  name: string;
  description: string;
}

const NAMES = ["David", "Mark", "Penguin", "Allen"];

function createRandomUser(): User {
  const idx = ~~(Math.random() * NAMES.length);
  return {
    id: idx.toString(),
    name: NAMES[idx],
    description: `Hi, I am ${NAMES[idx]}`,
  };
}

export default defineEventHandler(() => createRandomUser());
