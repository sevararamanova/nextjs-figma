

import { useRouter } from 'next/router';
import Image from 'next/image';
import computer1 from '../../images/computer.png';
import computer2 from '../../images/computer2.png';

const images = [computer1, computer2, computer1, computer2, computer1, computer2];

export async function getStaticPaths() {
  const paths = images.map((_, index) => ({
    params: { id: (index + 1).toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id, 10);
  return { props: { image: images[id - 1] } };
}

const SinglePage = ({ image }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Details for Card {id}</h1>
      <Image src={image} alt={`Computer ${id}`} width={600} />
      <p>More details about card {id}...</p>
    </div>
  );
};

export default SinglePage;
