export const Child = ({ msg, user, animals }) => {
  
    return (
    <>
      <div>Child</div>
      {msg}
      <br />
      {user.name}
      <br />
      {animals.map((animal) => (
        <div key={animal.id}>
          <h4>{animal.name}</h4>
          <img src={animal.img} alt={animal.name} width="150" />
        </div>
      ))}
    </>
  );
};
