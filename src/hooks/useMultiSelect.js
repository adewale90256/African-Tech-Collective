import { useState } from "react";

function useMultiSelect(initialValue = []) {
  const [selected, setSelected] = useState(initialValue);

  const toggleItem = (item) => {
    const updated = selected.includes(item)
      ? selected.filter((value) => value !== item)
      : [...selected, item];

    setSelected(updated);

    return updated;
  };

  return {
    selected,
    toggleItem,
    setSelected,
  };
}

export default useMultiSelect;
