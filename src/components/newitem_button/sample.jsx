import React, { useState } from 'react';

const styles = {
  pageContainer: {
    position: 'relative',
    height: '98vh',
    overflow: 'hidden',
  },
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
    backgroundColor: '#f3f3f3',
    flexDirection: 'column',
    position: 'relative',
  },
  appContainerBlurred: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
    backgroundColor: '#f3f3f3',
    flexDirection: 'column',
    position: 'relative',
    filter: 'blur(4px)',
  },
  addButton: {
    backgroundColor: '#f89406',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    alignSelf: 'flex-start',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  modal: {
    background: '#fff',
    borderRadius: '8px',
    width: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 11,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '98vh',
    overflow: 'hidden',
  },
  modalContent: {
    overflowY: 'auto',
    padding: '20px',
    flexGrow: 1,
    maxHeight: 'calc(80vh - 70px)', 
    scrollbarWidth: 'none',
    msOverflowStyle: 'none', 
  },
  modalFooter: {
    padding: '15px 20px',
    backgroundColor: '#fff',
    borderTop: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    bottom: 0,
    width: '100%',
  },
  header: {
    fontSize: '18px',
    margin: '0 0 20px 0',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  },
  radio: {
    cursor: 'pointer',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  select: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  variantRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#d9534f',
  },
  addVariantButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    alignSelf: 'flex-start',
  },
  addItemButton: {
    backgroundColor: '#f89406',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};


const GlobalStyles = () => (
  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
);


function AddItem({ onClose }) {
  const [variants, setVariants] = useState([
    { code: '002a', name: 'Small' },
    { code: '002b', name: 'Medium' },
    { code: '002c', name: 'Large' },
  ]);

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const handleAddVariant = () => {
    setVariants([...variants, { code: '', name: '' }]);
  };

  const handleRemoveVariant = (index) => {
    const updatedVariants = variants.filter((_, i) => i !== index);
    setVariants(updatedVariants);
  };

  return (
    <div style={styles.modal}>
      <div style={{ ...styles.modalContent, ...styles.hideScrollbar }} className="hide-scrollbar">
        <h2 style={styles.header}>Add new items</h2>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input type="radio" name="itemType" style={styles.radio} />
            Individual item
          </label>
          <label style={styles.radioLabel}>
            <input type="radio" name="itemType" defaultChecked style={styles.radio} />
            Item with variants
          </label>
        </div>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Item name</label>
          <input type="text" defaultValue="Coffee cup" style={styles.input} />
        </div>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Category</label>
          <select defaultValue="Drinks" style={styles.select}>
            <option value="Drinks">Drinks</option>
            <option value="Food">Food</option>
          </select>
        </div>
        {variants.map((variant, index) => (
          <div key={index} style={styles.variantRow}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Item code</label>
              <input
                type="text"
                value={variant.code}
                onChange={(e) => handleVariantChange(index, 'code', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Variant name</label>
              <input
                type="text"
                value={variant.name}
                onChange={(e) => handleVariantChange(index, 'name', e.target.value)}
                style={styles.input}
              />
            </div>
            <button onClick={() => handleRemoveVariant(index)} style={styles.deleteButton}>🗑️</button>
          </div>
        ))}
        <button onClick={handleAddVariant} style={styles.addVariantButton}>
          + Add Variant
        </button>
      </div>
      <div style={styles.modalFooter}>
        <button onClick={onClose} style={styles.addItemButton}>
          Add Item
        </button>
      </div>
    </div>
  );
}


function Sample({ isModalOpen, onClose }) {
  return (
    <div style={styles.pageContainer}>
      <GlobalStyles />
      {isModalOpen && (
        <>
          <div style={styles.overlay} onClick={onClose}></div>
          <AddItem onClose={onClose} />
        </>
      )}
    </div>
  );
}

export default Sample;
