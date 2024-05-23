function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return { 
    props: {
      products: [{ id: 'p1', title: 'Product 1', description: 'This is product 1'}]
    }
  };
}

export default HomePage;
