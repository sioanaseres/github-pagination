const container = document.querySelector(".container");

const displayFollowers = (followers) => {
  const newFollowers = followers
    .map((follower) => {
      const { avatar_url: image, login, html_url: url } = follower;

      return `
<article class="card"> 
<img src ="${image}" alt ="${login}"/>
<h4>${login}</h4>
<a href="${url}" class="btn">view profile</a>
</article>`;
    })
    .join("");

  container.innerHTML = newFollowers;
};

export default displayFollowers;
