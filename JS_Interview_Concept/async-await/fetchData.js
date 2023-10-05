const USERS = `https://jsonplaceholder.typicode.com/users`;
const POSTS = `https://jsonplaceholder.typicode.com/posts`;

const AUDITLOGS = `https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`;

async function users() {
  try {
    const [users, posts, auditogs] = await Promise.all([
      fetch(USERS),
      fetch(POSTS),
      fetch(AUDITLOGS),
    ]);
    const usersData = await users.json();
    const postsData = await posts.json();
    const auditogsData = await auditogs.json();

    /* A comment. */
    console.log(usersData);
    console.log(postsData);
    console.log(auditogsData);
  } catch (error) {
    console.log(error);
  }
}

users();
