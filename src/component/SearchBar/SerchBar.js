function SearchBar() {
  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Searching:", event.target.searchTerm.value);
  };

  return (
    <Form onSubmit={handleSearch} inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        name="searchTerm"
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
