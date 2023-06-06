import React from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
];

export default function Autocomplete() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <div>
      <CUIAutoComplete
        // label="Choose preferred work locations"
        placeholder="أبحث الأن"
        onCreateItem={handleCreateItem}
        items={pickerItems}
        selectedItems={selectedItems}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </div>
  );
}
