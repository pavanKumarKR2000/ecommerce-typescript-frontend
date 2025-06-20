interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}

const SearchPage = async (props: SearchPageProps) => {
  const { q } = await props.searchParams;

  return <div>{q}</div>;
};

export default SearchPage;
