import { FadeIn } from "@/components/Animations";
import Post from "@/components/Post";
import { RichText } from "@/lib/bricks/src/RichText";

export default function Blog(props: any) {
  const { posts } = props;

  // return;
  if (!posts) {
    return null;
  }

  return (
    <div className="bg-shark-50">
      {/* <FadeIn> */}
      {/* <RichText className="text-shark-900" content={posts[0].content} /> */}
      {/* </FadeIn> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[...posts, ...posts, ...posts].map((post) => {
              const { id } = post;
              return <Post key={id} {...post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: [],
    },
  };
}
