import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', Breed: 'Sphynx' },
  { name: 'Mittens', age: '2', Breed: 'Peterbald' },
  { name: 'Shadow', age: '1', Breed: 'Birman' },
  { name: 'Pumpkin', age: '3', Breed: 'Abyssinian' },
  { name: 'Luna', age: '4', Breed: 'Persian' },
  { name: 'Simba', age: '2', Breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let updatedCats = cats;

    if (breedFilter) {
      updatedCats = updatedCats.filter((cat) => cat.Breed === breedFilter);
    }

    if (nameFilter) {
      updatedCats = updatedCats.filter((cat) =>
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredCats(updatedCats);
  }, [breedFilter, nameFilter, cats]);

  const uniqueBreeds = [...new Set(availableCats.map((cat) => cat.Breed))];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="search filters mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control mb-2"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />

        <select
          className="breed form-select"
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
        >
          <option value="">All Breeds</option>
          {uniqueBreeds.map((breed, i) => (
            <option key={i} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="cat-row mt-2 row g-4 cats-container" id="cats-container">
      {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '215px', objectFit: 'cover' }}
              />

              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.Breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
