export const samplePost: BlogPost = {
  id: "1",
  title: "How Quality, Precision and Eco-Friendly Practices Can Boost Your Brand",
  slug: "get-on-track",
  excerpt:
    "Craftsmanship in shop-fitting involves the combination of interior design, bespoke furniture manufacturing, as well as equipment and signage procurement. The field is highly competitive, and staying relevant requires evolution and adaptation to changing consumer trends and demands...",
  content:
    "Craftsmanship in shop-fitting involves the combination of interior design, bespoke furniture manufacturing, as well as equipment and signage procurement. The field is highly competitive, and staying relevant requires evolution and adaptation to changing consumer trends and demands.\
    <br/><br/>\
    Taking a unique approach by integrating quality, precision, and eco-consciousness as part of the consumer shopping experience can set you apart from the competition. Embracing sustainable practices not only shows benevolence towards the environment but also instills trust and credibility in customers who seek responsibility in their favorite brands.\
    ",
  date: new Date(),
  publishedDate: new Date(),
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

  // Image
  // const hasPostImage = Math.random() * 10 > 5;
  const hasPostImage = true;
  const featuredImage = hasPostImage ?
    `https://source.unsplash.com/random/900×700/?blog/${Math.random()}` : "";

  return {
    ...samplePost,
    featuredImage,
    publishedDate: randomDate,
  };
};

export const getSamplePosts = (count?: number) => {
  const posts: BlogPost[] = [];
  for (let i = 0; i < (count || 5); i++) {
    posts.push(getSamplePost());
  }
  return posts;
}
