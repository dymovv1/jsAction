const textDiv = document.getElementById('text');
const ctrlE = 69; 
const ctrlS = 83; 

let isEditing = false;
let originalText = textDiv.innerText;

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === ctrlE) {
    if (!isEditing) {
      textDiv.innerHTML = `<textarea id="editor">${originalText}</textarea>`;
      isEditing = true;
    }
    event.preventDefault();
  } else if (event.ctrlKey && event.keyCode === ctrlS) {
    if (isEditing) {
      const editedText = document.getElementById('editor').value;
      textDiv.innerHTML = editedText;
      originalText = editedText;
      isEditing = false;
    }
    event.preventDefault();
  }
});


// -------------------------------------------------------------------------------

function sortTable(columnIndex) {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.getElementsByTagName("tr"));
    
    rows.shift(); 
    
    rows.sort(function(a, b) {
      const aVal = a.getElementsByTagName("td")[columnIndex].textContent;
      const bVal = b.getElementsByTagName("td")[columnIndex].textContent;
      
      if (!isNaN(aVal) && !isNaN(bVal)) { 
        return parseInt(aVal) - parseInt(bVal);
      } else { 
        return aVal.localeCompare(bVal);
      }
    });
    
    
    rows.forEach(function(row) {
      table.appendChild(row);
    });
  }
  