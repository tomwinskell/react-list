import List from './assets/components/List'
import Input from './assets/components/Input'
import { useState } from 'react';

let nextId = 0;

interface Item {
  id: number;
  name: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div className='m-4'>
      <Input onSubmit={(item: string) => setItems([...items, { id: nextId++, name: item }])}/>
      <List items={items} heading='Shopping List' onDelete={(id: number) => setItems(items.filter(i => i.id !== id))}/>
    </div>
  )
}