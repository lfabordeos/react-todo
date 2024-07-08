export default function Footer() {
  const date = new Date();

  return (
    <div className="text-center bg-yellow-50 sticky bottom-0 w-full mt-5 px-6">
      <hr />
      <h2>Todo List - {date.getFullYear()}</h2>
    </div>
  );
}
