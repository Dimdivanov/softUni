export default function Player({ user, title }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{user.nickname}</p>
      <p>Hp: {user.hp}</p>
      <p>Armor: {user.armor}</p>
    </>
  );
}
