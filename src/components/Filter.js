const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      Find Countries{" "}
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};
export default Filter;
