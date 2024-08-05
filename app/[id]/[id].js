import SinglePage from '../pages/singlePage/[id]';

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default SinglePage;
