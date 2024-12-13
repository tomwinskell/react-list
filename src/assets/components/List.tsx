interface Item {
  id: number;
  name: string;
}

interface Props {
  items: Item[];
  heading: string;
  onDelete: (id: number) => void;
}

export default function List({ items, heading, onDelete }: Props) {
  const listItems: JSX.Element[] = items.map((item) => (
    <li
      key={item.id}
      className="list-group-item d-flex flex-row justify-content-between align-items-center"
    >
      {item.name}
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <h1 className="mt-4">{heading}</h1>
      {items.length === 0 && <p>No list items found.</p>}
      <ul className="list-group">{listItems}</ul>
    </>
  );
}
