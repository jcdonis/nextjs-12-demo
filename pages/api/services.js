// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => res.status(200).json(json));
};
