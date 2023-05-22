export const samplePost: BlogPost = {
  id: "1",
  title: "How to Get Software Teams Back on Track",
  slug: "get-on-track",
  excerpt:
    "It’s time to stop worrying about the future — Life has a peculiar habit of throwing curveballs our way, always keeping us on our toes...",
  content:
    "Life has a peculiar habit of throwing curveballs our way, always keeping us on our toes. Sometimes, it feels like we’re living in an endless game of dodgeball.\
    Noise is all around me. And by noise, I mean endless thoughts and worries about the future.\
    As someone who has spent a fair share of time facing fears and catastrophizing scenarios, I can confidently say that it’s a colossal waste of our precious time and energy.\
    The future will always remain uncertain — an elusive dance partner that’s just beyond our reach.\
    Despite the unpredictability of it all, there’s a certain beauty in embracing the unknown. If we attempt to predict and control every aspect of our lives, we’ll miss out on the spontaneous, wondrous moments.\
    Instead, let’s choose to focus our energy on living in the present, taking on challenges as they come, and giving ourselves permission to adapt and grow.\
    ",
  date: new Date(),
  publishedDate: new Date(),
  author: {
    name: "John Smith",
    image: "",
  },
  featuredImage: "",
};

export const getSamplePost = (): BlogPost => {
  // Date
  const today = new Date();
  const startDate = new Date(new Date(today).setDate(today.getDate() - 5));
  const endDate = today;
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);

  // Author
  const names = ["Madison Hunter", "Tom Smykowski", "Mohamed Aravi", "Gokhan Aboelez", "Nicklas kh", "Saba Millard", "Denis Khitaridze"];
  const name = names[Math.floor(Math.random() * names.length)];
  const authorImage = `https://source.unsplash.com/random/200x200/?face/${Math.random()}`

  // Image
  // const hasPostImage = Math.random() * 10 > 5;
  const hasPostImage = true;
  const featuredImage = hasPostImage ?
    `https://source.unsplash.com/random/900×700/?blog/${Math.random()}` : "";

  return {
    ...samplePost,
    featuredImage,
    publishedDate: randomDate,
    tags: ["Marketing", "Technology"],
    author: {
      name,
      image: authorImage
    }
  };
};

export const getSamplePosts = (count?: number) => {
  const posts: BlogPost[] = [];
  for (let i = 0; i < (count || 5); i++) {
    posts.push(getSamplePost());
  }
  return posts;
}
