import { useState } from 'react';

interface Props {
  onSubmit: (item: string) => void;
}

export default function Input( { onSubmit } : Props ) {
  const [name, setName] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(name);
      setName('');
    }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Enter list item..."
        aria-label="List item input"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-primary"
        type="submit"
        id="button-addon2"
      >
        Add to list
      </button>
    </form>
  );
}
